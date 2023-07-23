/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.{js,jsx,ts,tsx}",
    "./<custom-folder>/**/*.{js,jsx,ts,tsx}",
    "./src/styles/Styles.{js,jsx,ts,tsx}",

    "./src/screens/HomeScreen.{js,jsx,ts,tsx}",

    "./src/components/Header.{js,jsx,ts,tsx}",
    "./src/components/Categories.{js,jsx,ts,tsx}",
    "./src/components/FeaturedRow.{js,jsx,ts,tsx}",
    "./src/components/RestaurantCards.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

