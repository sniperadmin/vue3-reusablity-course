import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import vuetify from 'vite-plugin-vuetify'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      vuetify()
    ],
    test: {
      environment: 'jsdom',
      server: {
        deps: {
          inline: ['vuetify']
        }
      },
      coverage: {
        enabled: true,
        provider: 'istanbul',
        reporter: ['text', 'json', 'html']
      },
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: ['./vitest-setup.ts']
    }
  })
)
