// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: false,
  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/eslint",
  ],
  runtimeConfig: {
    token: process.env.token,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "accent",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
  },
});
