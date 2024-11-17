import { defineEventHandler, readBody } from '#imports'
import unleashClient from '../../unleash'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const client = await unleashClient()

  const features = client.isEnabled(body.flag, body.ctx)

  return features
})
