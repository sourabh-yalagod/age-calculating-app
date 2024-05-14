/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html","./src/app/js/script.js"],
  theme: {
    extend: {
      colors:{
        Purple: 'hsl(259, 100%, 65%)',
        Light_red: 'hsl(0, 100%, 67%)',
        White_mix: 'hsl(0, 0%, 100%)',
        Off_white: 'hsl(0, 0%, 94%)',
        Light_grey: 'hsl(0, 0%, 86%)',
        Smokey_grey: 'hsl(0, 1%, 44%)',
        Off_black: 'hsl(0, 0%, 8%)',
      },
      fontFamily:{
        'Poppins': "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
}

