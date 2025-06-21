// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-06-21",
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  components: [{ path: "~/components", pathPrefix: false }],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=VT323&display=swap",
        },
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Guess That Tune is an interactive music quiz web app. Test your knowledge of popular artists and songs with fun, dynamic quizzes!",
        },
        {
          name: "keywords",
          content:
            "music quiz, guess the song, music game, artist quiz, song trivia, interactive quiz",
        },
        { name: "author", content: "Guess That Tune" },
        {
          property: "og:title",
          content: "Guess That Tune - Music Quiz Game",
        },
        {
          property: "og:description",
          content:
            "Challenge your music knowledge! Listen to song previews and guess the correct title in this interactive quiz.",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: "https://guessthattune.com",
        },
        {
          property: "og:image",
          content: "https://guessthattune.com/og-image.png",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Guess That Tune - Music Quiz Game",
        },
        {
          name: "twitter:description",
          content:
            "Test your knowledge of popular artists and songs with Guess That Tune!",
        },
        {
          name: "twitter:image",
          content: "https://guessthattune.com/og-image.png",
        },
        { name: "apple-mobile-web-app-title", content: "Guess that Tune" },
      ],
    },
  },
});
