import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', 'shadcn-nuxt', '@nuxtjs/color-mode', '@nuxt/icon'],
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
    componentDir: './app/components/ui/shadcn',
  },
  compatibilityDate: '2026-02-27',
})
