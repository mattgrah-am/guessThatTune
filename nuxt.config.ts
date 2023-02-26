// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  components: [{ path: "~/components", pathPrefix: false }],
  app: {
    head: {
      meta: [],
      link: [
        {
          rel: "stylesheet",
          href: "https://api.fonts.coollabs.io/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=VT323&display=swap",
        },
      ],
    },
  },
});
