export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    api: 'https://www.your-wp-link.co.uk',
    canonical: 'https://www.your-live-site.co.uk'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Site Title',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { hid:'og-site_name', name: 'og:site_name', content: 'Site title'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '',},
      { hid: 'og-description', name: 'og:description', content: ''},
      { name: 'format-detection', content: 'telephone=no' },
      { hid:'og-image', property:'og:image', content: 'favicon.ico'},
      { hid:'robots', property: 'robots', content:'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  router: {},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
