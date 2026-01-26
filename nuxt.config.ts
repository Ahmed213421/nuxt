// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura'
import Knob from 'primevue/knob'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module', 'nuxt-swiper', '@element-plus/nuxt', '@nuxtjs/i18n'],

  css: [
    'primeicons/primeicons.css', 'swiper/css',
    'swiper/css/grid',
    'swiper/css/navigation',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/first.css',

  ],

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ar', name: 'Arabic', file: 'ar.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix'
    },

  tailwindcss: {
    exposeConfig: true,
  },
  
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          cssLayer: false,
          darkModeSelector: '.never-enable-dark',

        },
      },
    },
  },  
})