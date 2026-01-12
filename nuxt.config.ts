// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module', 'nuxt-swiper','@element-plus/nuxt'],

  css: [
    '~/assets/css/first.css',    'primeicons/primeicons.css','swiper/css',
    'swiper/css/grid',
    'swiper/css/navigation',
  '@fortawesome/fontawesome-svg-core/styles.css',

  ],

  tailwindcss: {
    exposeConfig: true,
  },
  
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          cssLayer: true,
          darkModeSelector: '.never-enable-dark',

        },
      },
    },
  },  
})