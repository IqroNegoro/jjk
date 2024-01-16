/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,jsx,html}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        orange: "#FF8718"
      }
    },
  },
  plugins: [],
}

