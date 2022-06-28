/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './src/*.jsx',
    './src/components/**/*.jsx'
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '345px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '720px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1169px',
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        purple: {
          100: '#fbf6ff',
          300: '#9e6dc2',
          500: '#290742',
          700: '#170027',
        },
        green: {
          500: '#4fff4b',
        },
      },
    },
  },
  plugins: [],
}
