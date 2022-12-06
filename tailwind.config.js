/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#1F5393',
      'white': '#ffffff'
    },
    extend: {
      fontFamily: {
        outfit: 'Outfit',
      },
    },
  },
  plugins: [],
}
