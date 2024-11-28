import { createResolver } from '@nuxt/kit'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

const { resolve } = createResolver(import.meta.url)

process.env.NODE_ENV = 'production'

describe('ssr', async () => {
  await setup({
    rootDir: resolve('./fixtures/basic'),
    build: true,
  })

  it('renders the index page', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    expect(html).toContain('basic')
  })
})
