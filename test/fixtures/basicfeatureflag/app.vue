<template>
  <div v-if="featureIsOn">
    Feature is on
  </div>
</template>

<script setup lang="ts">
const { isFeatureEnabled } = await useUnleash()

const { enabled: featureIsOn } = await isFeatureEnabled('test-feature-flag')
</script>
