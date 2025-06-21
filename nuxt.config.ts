// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-06-21",
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  components: [{ path: "~/components", pathPrefix: false }],
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Guess That Tune is an interactive music quiz web app. Test your knowledge of popular artists and songs with fun, dynamic quizzes!",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "music quiz, guess the song, music game, artist quiz, song trivia, interactive quiz",
        },
        { hid: "author", name: "author", content: "Guess That Tune" },
        {
          hid: "og:title",
          property: "og:title",
          content: "Guess That Tune - Music Quiz Game",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Challenge your music knowledge! Listen to song previews and guess the correct title in this interactive quiz.",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://guessthattune.com",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://guessthattune.com/og-image.png",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Guess That Tune - Music Quiz Game",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Test your knowledge of popular artists and songs with Guess That Tune!",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://guessthattune.com/og-image.png",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=VT323&display=swap",
        },
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
      ],
    },
  },
});
