export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'hi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'sytlesheet',
        crossorigin: 'anonymous',
        href:
          'https://fonts.googleapis.com/css?family=Poppins:200,300,400,700,900|Display+Playfair:200,300,400,700'
      },
      {
        rel: 'sytlesheet',
        href: '/fonts/icomoon/style.css',
        type: 'text/css'
      },
      {
        rel: 'sytlesheet',
        href: '/css/bootstrap.min.css',
        type: 'text/css'
      },
      {
        rel: 'sytlesheet',
        href: '/css/magnific-popup.css',
        type: 'text/css'
      },
      {
        rel: 'sytlesheet',
        href: '/css/jquery-ui.css',
        type: 'text/css'
      },
      {
        rel: 'sytlesheet',
        href: '/css/owl.carousel.min.css',
        type: 'text/css'
      },
      {
        rel: 'sytlesheet',
        href: '/css/owl.theme.default.min.css',
        type: 'text/css'
      },
      {
        rel: 'sytlesheet',
        href: '/css/bootstrap-datepicker.css',
        type: 'text/css'
      },
      {
        rel: 'sytlesheet',
        href: '/fonts/flaticon/font/flaticon.css',
        type: 'text/css'
      },
      {
        rel: 'sytlesheet',
        crossorigin: 'anonymous',
        href:
          'https://cdn.jsdelivr.net/npm/mediaelement@4.2.7/build/mediaelementplayer.min.css'
      },
      {
        rel: 'sytlesheet',
        href: '/css/style.css',
        type: 'text/css'
      }
    ],
    script: [
      { src: '/js/jquery-3.3.1.min.js', body: true },
      { src: '/js/jquery-migrate-3.0.1.min.js', body: true },
      { src: '/js/jquery-ui.js', body: true },
      { src: '/js/popper.min.js', body: true },
      { src: '/js/bootstrap.min.js', body: true },
      { src: '/js/owl.carousel.min.js', body: true },
      { src: '/js/jquery.stellar.min.js', body: true },
      { src: '/js/jquery.countdown.min.js', body: true },
      { src: '/js/jquery.magnific-popup.min.js', body: true },
      { src: '/js/bootstrap-datepicker.min.js', body: true }
      // { src: '/js/aos.js', body: true }
      // { src: '/js/main.js', body: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = 'source-map'
      }
    }
  }
}
