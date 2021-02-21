const SITE_URL = "https://kentakudo.com";

export default {
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
      { property: "og:site_name", content: "Kenta Kudo" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: SITE_URL },
      { hid: "og:title", property: "og:title", content: "Kenta Kudo" },
      {
        hid: "og:description",
        property: "og:description",
        content: process.env.npm_package_description || ""
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/_nuxt/assets/img/Profile.png"
      },
      { name: "twitter:site", content: "@___________k_k_" },
      { name: "twitter:card", content: "summary_large_image" },
      { hid: "twitter:url", name: "twitter:url", content: SITE_URL },
      { hid: "twitter:title", name: "twitter:title", content: "Kenta Kudo" },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: process.env.npm_package_description || ""
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/_nuxt/assets/img/Profile.png"
      },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { hid: "canonical", rel: "canonical", href: SITE_URL },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:wght@400;700&display=swap"
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
    "@fortawesome/fontawesome-free/css/all.css",
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/styles/main.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vue-fragment.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxt/content"],
  generate: {
    async routes() {
      const { $content } = require("@nuxt/content");
      const files = await $content({ deep: true })
        .only(["path"])
        .fetch();

      return files.map(file => (file.path === "/index" ? "/" : file.path));
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test(".svg"));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ["babel-loader", "vue-svg-loader"]
      });
    }
  },

  components: true,

  target: "static"
};
