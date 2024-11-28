export default defineNuxtConfig({
  modules: ['../src/module'],

  devtools: { enabled: true },
  compatibilityDate: '2024-11-17',

  unleash: {
    url: 'https://gitlab.com/api/v4/feature_flags/unleash/64595608',
    appName: 'staging',
    instanceId: 'glffct-x59mDPtqt5xBQHh_Y3cs',
    customApiPath: 'my-custom-unleash-path',
  },
})
