import darkerSoftwareTheme from "darker-software-tailwind-theme/theme/darker.software.tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    import("darker-software-tailwind-theme/theme/darker.software.tailwind")
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}