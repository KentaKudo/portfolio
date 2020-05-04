export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Kenta Kudo",
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-130239932-1",
        async: true
      },
      { src: "/ga.js" }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href:
          "https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900",
        rel: "stylesheet"
      },
      {
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i",
        rel: "stylesheet"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png"
      },
      {
        rel: "manifest",
        href: "/favicon/site.webmanifest"
      },
      {
        rel: "mask-icon",
        href: "/favicon/safari-pinned-tab.svg",
        color: "#5bbad5"
      },
      {
        name: "msapplication-TileColor",
        content: "#da532c"
      },
      {
        name: "theme-color",
        content: "#ffffff"
      },
      {
        name: "msvalidate.01",
        content: "F06EC7CF1A73EF9EB5BF6902A77C605C"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "devicons/css/devicons.css",
    "font-awesome/css/font-awesome.css",
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/styles/main.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
