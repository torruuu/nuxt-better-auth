import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    // @ts-expect-error - tailwindcss is a valid plugin (bug with tailwind and vite versions)
    plugins: [tailwindcss()],
  },
  typescript: {
    typeCheck: false,
  },
  shadcn: {
    componentDir: './app/components/ui',
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' },
    ],
    detectBrowserLanguage: {
      cookieKey: 'lang',
      alwaysRedirect: true,
      fallbackLocale: 'en',
    },
  },
  routeRules: {
    '/api/**': {
      proxy: `${process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:4000'}/**`,
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },
  compatibilityDate: '2026-02-27',
})
