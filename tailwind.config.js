/** @type {import('tailwindcss').Config}*/
const defaultTheme = require("tailwindcss/defaultTheme");
const daisyui = require("daisyui");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [daisyui],
};
