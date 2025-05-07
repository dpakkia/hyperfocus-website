export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Jost: [300, 400, 500, 600, 700],
    },
    display: 'swap',
  },
})
