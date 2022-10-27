/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container :{
        center: true,
        padding : '6rem'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}