/** @type {import('tailwindcss').Config} */
const scrollbar = require('tailwind-scrollbar')
module.exports = {
  content: ["./public/**/*.{html,js}",
            "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    scrollbar
  ],
}

