<template>
  <div>
    <h1>nuxt-unleash for Nuxt 3</h1>
    <p>Here you can play around with Vue 3 and Vite</p>
    <p v-if="enabled" style="color: green;">
      Feature flag is enabled for {{ ctx.userId }}
    </p>
    <p v-else style="color: red;">
      Feature flag is disabled for {{ ctx.userId }}
    </p>
    <p>
      <button type="button" @click="refresh">
        Refresh feature
      </button>
    </p>
    <p>
      <button type="button" @click="ctx.userId = 'testuser1@example.com'">
        Change user to testuser1@example.com
      </button>
    </p>
    <p>
      <button type="button" @click="ctx.userId = 'testuser2@example.com'">
        Change user to testuser2@example.com
      </button>
    </p>
    <p v-if="serverFeatureFlag" style="color: green;">
      Server Feature flag is enabled
    </p>
    <p v-else style="color: red;">
      Server Feature flag is disabled
    </p>
    <p>
      <button @click="checkFeatureFlagApi">Check feature flag on api</button>
    </p>
    <NuxtLink to="/otherpage">Go to other page</NuxtLink>
  </div>
</template>

<script setup lang="ts">

const { isFeatureEnabled } = useUnleash();

const ctx = ref({
  userId: 'testuser1@example.com'
});

let { enabled, refresh } = await isFeatureEnabled('test-feature-flag', ctx)

const serverFeatureFlag = ref(false);

const checkFeatureFlagApi = async () => {
  serverFeatureFlag.value = await $fetch('/api/feature-flag');
}

</script>
