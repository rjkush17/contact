/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'pops' : ['Poppins', "sans-serif"]
      },backgroundColor :{
        body : 'rgb(42, 42, 48, 1)',
      },
      colors :{
        heading :'#ff4533',
        normal : '#dfdbe5'
      }
    },
  },
  plugins: [],
}