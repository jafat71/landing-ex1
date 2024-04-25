/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBlue: '#121F2F',
        bgRose: '#FB88BC',
        bgOrange: '#F9AA57',
        bgBlack: '#060B0E',
        bgLightBlue: '#004165',
        bgGradient: {
          start: '#004165',
          end: '#060B0E',
        }
      },
      fontFamily: {
        sans: ['Libre Franklin','sans-serif']
      }
    },
  },
  plugins: [],
}

