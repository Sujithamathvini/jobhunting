/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'greenColor' :'#bae410',
        'greyIsh' : '#bdb8a0',
        'cardShadow' : '#f7f8f9',
        'textColor': '#252b36',
        'blackColor': '#000000'
      }
      // BAE410 - green - ade41f
    },
  },
  plugins: [],
}

