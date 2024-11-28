import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

process.env.NODE_ENV = 'production'

describe('ssr', async () => {
  await setup({
    rootDir: resolve('./fixtures/basicfeatureflag'),
    build: true,
  })

  it('Make sure feature flag is on', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    expect(html).toContain('Feature is on')
  })
})
