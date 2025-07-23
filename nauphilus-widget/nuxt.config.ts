// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@pinia/nuxt'],
    vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  colorMode: {
    preference: "dark",
  },
  css: ['~/assets/styles/main.css'],

    runtimeConfig: {
    membershipKey: process.env.membershipKey,
    productKey: process.env.productKey,
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret
  },
  ssr:true

})