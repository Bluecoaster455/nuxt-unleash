import { defineNuxtModule, addPlugin, createResolver, addImportsDir, addServerHandler, addServerPlugin, addTypeTemplate, addImports } from '@nuxt/kit'
import type { UnleashConfig } from 'unleash-client'
import { defu } from 'defu'

export type ModuleOptions = UnleashConfig & { customApiPath: string }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@bluecoaster/unleash',
    configKey: 'unleash',
  },
  defaults: {
    customApiPath: 'unleash',
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.unleash ||= { ...options }
    nuxt.options.runtimeConfig.public.unleash ||= { customApiPath: 'unleash' }

    // Make sure url is set
    if (!options.url) {
      console.warn('Unleash module requires `url` option to be set');
      return
    }

    // Make sure appName is set
    if (!options.appName) {
      console.warn('Unleash module requires `appName` option to be set');
      return
    }

    nuxt.options.runtimeConfig.unleash = defu(nuxt.options.runtimeConfig.unleash, {
      ...options
    }) as ModuleOptions

    nuxt.options.runtimeConfig.public.unleash.customApiPath = nuxt.options.runtimeConfig.unleash.customApiPath

    addServerPlugin(resolve('./runtime/server/plugin'))

    //addImportsDir(resolve('./runtime/composables'))

    addImports([
      {
        name: 'useUnleash',
        from: resolve(`./runtime/composables`)
      }
    ])

    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.alias = nitroConfig.alias || {}

      // Inline module runtime in Nitro bundle
      nitroConfig.externals = defu(
        typeof nitroConfig.externals === 'object' ? nitroConfig.externals : {},
        {
          inline: [resolve('./runtime')]
        }
      )
      nitroConfig.alias['#unleash'] = resolve('./runtime/server/services')
    })
    addTypeTemplate({
      filename: 'types/auth.d.ts',
      getContents: () =>
        [
          '// AUTO-GENERATED BY @bluecoaster/nuxt-unleash',
          'declare module \'#unleash\' {',
          `  const { unleashClient }: typeof import('${resolve('./runtime/server/services')}')`,
          '}',
          ''
        ].join('\n')
    })

    addServerHandler({
      route: `/api/${nuxt.options.runtimeConfig.public.customApiPath}/features`,
      handler: resolve('./runtime/server/api/unleash/features.post'),
    })
  },
})