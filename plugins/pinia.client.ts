// plugins/pinia.client.ts
import { defineNuxtPlugin } from '#app'
import { createPinia } from 'pinia'

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      const pinia = createPinia();
      nuxtApp.vueApp.use(pinia);
    }
  });