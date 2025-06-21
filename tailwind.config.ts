import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        mono: ["VT323", "monospace"],
      },
      colors: {
        // Define any custom colors here
      },
      height: {
        screen: "100vh",
        "screen-small": "100svh",
        "screen-dynamic": "100dvh",
      },
      minHeight: {
        screen: "100vh",
        "screen-small": "100svh",
        "screen-dynamic": "100dvh",
      },
    },
  },
  plugins: [],
  future: {
    // All these options are enabled by default in Tailwind CSS v4
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
    removeDeprecatedUtilities: true,
  },
} satisfies Config;
