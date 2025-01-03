/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '390px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors : {
        DarkCustom : '#2B3945'
      },
      fontFamily : {
        'briliant' : ['EB Garamond', 'serif']
      }
    },
  },
  plugins: [],
}

