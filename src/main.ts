import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from './vuetify'

// @ts-ignore
import App from './App.vue'
import router from './router'

const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .mount('#app')
