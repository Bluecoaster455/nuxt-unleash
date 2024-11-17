<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

# Nuxt 3 Unleash Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

This module allows the use of [Unleash](https://www.getunleash.io) feature flagging system into your Nuxt 3 app.

## Features

- Uses the [unleash-client](https://www.npmjs.com/package/unleash-client) SDK as the driving package for communications.
- Reactive feature flag reloading in your components
- Server-side (API) support
- Contextual features support

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @bluecoaster/nuxt-unleash
```

Then add the options into your `nuxt.config.ts`:

```javascript
export default defineNuxtConfig({
  modules: ["@bluecoaster/nuxt-unleash"],
  unleash: {
    url: "https://your-unleash-instance.com/unleash",
    appName: "my-app-name",
    instanceId: "YOUR_INSTANCE_ID_IF_REQUIRED",
  },
});
```

That's it! You can now use Unleash in your Nuxt app ✨

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@bluecoaster/nuxt-unleash/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@bluecoaster/nuxt-unleash
[npm-downloads-src]: https://img.shields.io/npm/dm/@bluecoaster/nuxt-unleash.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@bluecoaster/nuxt-unleash
[license-src]: https://img.shields.io/npm/l/@bluecoaster/nuxt-unleash.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@bluecoaster/nuxt-unleash
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
