require("dotenv").config();
const { QIITA_TOKEN } = process.env;

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "nuxt-beginner",
    titleTemplate:'%s | Nuxtjs tag items viewer',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  router:{
    middleware:[
      'auth'
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  modules: ["@nuxtjs/axios"],
  axios: {},
  plugins: ["~/plugins/axios.js",{src:'~/plugins/logger.js', ssr: true}],
  env: {
    QIITA_TOKEN: QIITA_TOKEN
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
