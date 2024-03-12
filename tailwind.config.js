/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ["abril", "sans-serif"],
        bakilda: ["bakilda", "sans-serif"],
        valueSanse: ["valueSanse", "sans-serif"],
        lemonada: ["lemonada", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
}