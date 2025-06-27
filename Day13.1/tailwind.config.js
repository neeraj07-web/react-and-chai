/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // add this to the talwind css for the dark and light mode
  darkMode : "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

