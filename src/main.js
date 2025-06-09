import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

// Import translations
import en from './locales/en.json'
import es from './locales/es.json'
import nl from './locales/nl.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    nl
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
