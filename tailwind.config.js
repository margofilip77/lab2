/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      gradientColorStops: theme => ({
        '33': '#8a53b6',
      })
    }
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

