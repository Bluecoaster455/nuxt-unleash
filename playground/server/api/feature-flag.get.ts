import { useUnleash } from '#unleash'

export default defineEventHandler(async () => {
  const client = await useUnleash()
  const features = client.isEnabled('test-feature-flag-server')
  return features
})
