import unleashClient from '../unleash'

export async function useUnleash() {
  const client = await unleashClient()
  return client
}
