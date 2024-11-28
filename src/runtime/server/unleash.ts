import { initialize, type Unleash } from 'unleash-client'
import type { ModuleOptions } from '~/src/module'

let unleashInstance: Unleash | undefined

export default async function (options?: ModuleOptions) {
  if (unleashInstance) {
    return unleashInstance
  }

  if (!options) {
    throw new Error('Unleash must be initialized with options first!')
  }

  const instance = unleashInstance = initialize(options)

  instance.on('error', console.error)
  instance.on('warn', console.warn)

  await new Promise((resolve) => {
    instance.on('ready', () => {
      resolve(null)
    })
  })

  return instance
}
