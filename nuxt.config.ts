// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { quasar } from '@quasar/vite-plugin'
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  ssr: false,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  css: [
    // "~/assets/vendors/feather/feather.css",
    // "~/assets/vendors/mdi/css/materialdesignicons.min.css",
    // "~/assets/vendors/ti-icons/css/themify-icons.css",
    // "~/assets/vendors/typicons/typicons.css",
    // "~/assets/vendors/simple-line-icons/css/simple-line-icons.css",
    // "~/assets/vendors/css/vendor.bundle.base.css",

    // "~/assets/elements/bootstrap.min.css",
    "~/assets/css/main.css",
    "@quasar/extras/material-icons/material-icons.css",
    "~/assets/styles/quasar.sass",
    'vuetify/styles'
    // "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.0.96/css/materialdesignicons.min.css"
  ],

  app: {
    head: {
      script: [
        // { src: "~/assets/elements/bootstrap.bundle.min.js", body: true },
        // { src: "~/assets/elements/jquery.min.js", body: true },
        // { src: "~/assets/elements/simpleBar.min.js", body: true },
      ],
    },
  },

  build: {
    transpile: ["quasar"],
  },
  vite: {
    //define: {
    //  __QUASAR_SSR__: true,
    //  __QUASAR_SSR_SERVER__: true
    //},

    // @ts-ignore
        // curently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
        ssr: {
          noExternal: ['vuetify'], // add the vuetify vite plugin
      },

    plugins: [
      //vue({
        // template: { transformAssetUrls },
      //}),
      quasar({
        sassVariables: "~/assets/styles/quasar.variables.sass",
      }),
    ],
  },

  modules: [
    // @ts-ignore
    // this adds the vuetify vite plugin
    // also produces type errors in the current beta release
    async (options, nuxt) => {
        nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(vuetify()))
    }
]
});
