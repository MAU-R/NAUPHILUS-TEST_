// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui',],
    vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  colorMode: {
    preference: "dark",
  },
  css: ['~/assets/styles/main.css'],
})