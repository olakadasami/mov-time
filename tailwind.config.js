/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#cccccc",
        "primary-dark": "#141312",
        "secondary-light": "#a6a6a6",
        "secondary-dark": "#1a1a18",
        "color-white": "#fff",
        "color-red": "#c61d26",
        "trans": "rgba(0,0,0,0.3)",
        "trans-white": "rgba(255,255,255,.3)"
      }
    },
  },
  plugins: [],
}