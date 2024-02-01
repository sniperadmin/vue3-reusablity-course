import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import ResizeObserver from 'resize-observer-polyfill'
import { config } from '@vue/test-utils'
// import { afterEach } from 'vitest'

const vuetify = createVuetify({
  components
})

config.global.plugins = [vuetify]
config.global.ResizeObserver = ResizeObserver
