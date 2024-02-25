// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 8000
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@tailwindcss/forms',
    '@nuxtjs/google-fonts'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  googleFonts: {
    inject: true,
    base64: true,
    useStylesheet: true,
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Inter: '200..700',
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    }
  }
})
