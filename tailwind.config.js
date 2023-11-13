/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#533a8e',
        'secondary' : '#78397e',
        'tertiary' : '#96386e'
      },
      fontFamily: {
        Poppins: ['Poppins'],
      },
      fontSize: {
        'titledesktop' : '2rem',
        'textdesktop' : '1.2rem',
        'titlemobile' : '1.4rem',
        'textmobile' : '1rem',

      }
    },
  },
  plugins: [],
}

