import { useRuntimeConfig } from "#app";
import type { Context } from "unleash-client"
import type { FallbackFunction } from "unleash-client/lib/helpers"
import { ref, watch, type ComputedRef, type Ref } from "vue";

export function useUnleash() {
  const customApiPath = useRuntimeConfig().public.customApiPath

  const isEnabled = async (flag: string, context?: Context | Ref<Context>, fallbackFn?: FallbackFunction) => {

    const ctx = context?.value || context

    const result = await $fetch<boolean>(`/api/${customApiPath}/features`, {
      method: 'POST',
      body: JSON.stringify({ flag, ctx, fallbackFn }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return result
  }

  return {
    isFeatureEnabled: async (flag: string, ctx?: Context | Ref<Context> | ComputedRef<Context>, fallbackFn?: FallbackFunction) => {
      const enabled = ref<boolean>(false)
      enabled.value = await isEnabled(flag, ctx, fallbackFn)

      if (ctx?.value) {
        watch(ctx, async () => {
          enabled.value = await isEnabled(flag, ctx, fallbackFn)
        }, { deep: true })
      }

      return {
        enabled: enabled,
        refresh: async () => {
          enabled.value = await isEnabled(flag, ctx, fallbackFn)
        }
      }
    },
  }
}
