/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {

    extend: {

      colors: {
        "primary-color": "#a91080",
        "secondary-color": "#008080",
        "nav-bar-color": "#374151"
      },
      
      fontFamily: {
        "charm": ["Charm", "cursive"],
        "saira-extra-condensed": ["Saira Extra Condensed", "sans-serif"],
        "leckerli-one": ["Leckerli One", "cursive"],
        "passion-one": ["Passion One", "sans-serif"]
      }

    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    }

  },
  
  plugins: [],

}

