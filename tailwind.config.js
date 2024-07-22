/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"]
      },
      colors: {
        'light-coffee': '#C89F94'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      },
      animation: {
        'slideDown': 'slideDown 0.2s ease-in-out',
      },
      backgroundImage: {
        'slider-bg': "url('./img/bg/bgCoffee.jpg')",
      }
    },
  },
  plugins: [],
}

