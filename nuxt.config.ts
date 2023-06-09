import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
    bridge: {
        vite: true
    },
    nitro: {
        routeRules: {
          '/*': { ssr: false }
        }
      },
})
