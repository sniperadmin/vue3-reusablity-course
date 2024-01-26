import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        dark: true
      }
    }
  },
  components,
  directives,
})

export default vuetify
