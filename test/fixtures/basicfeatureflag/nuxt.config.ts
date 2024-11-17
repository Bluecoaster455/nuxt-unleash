import NuxtUnleash from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    NuxtUnleash,
  ],
  unleash: {
    url: 'https://gitlab.com/api/v4/feature_flags/unleash/64595608',
    appName: 'staging',
    instanceId: 'glffct-x59mDPtqt5xBQHh_Y3cs',
  },
})
