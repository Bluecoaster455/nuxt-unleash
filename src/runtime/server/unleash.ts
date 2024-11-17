import { ModuleOptions } from "~/src/module";
import { initialize, Unleash } from 'unleash-client'

let unleashInstance: Unleash | undefined

export default async function (options?: ModuleOptions) {

  if (unleashInstance) {
    return unleashInstance
  }

  if (!options) {
    throw new Error('Unleash must be initialized with options first!')
  }

  var instance = unleashInstance = initialize(options)

  instance.on('error', console.error)
  instance.on('warn', console.warn)

  await new Promise((resolve) => {
    instance.on('ready', () => {
      resolve(null)
    })
  })

  return instance
}
