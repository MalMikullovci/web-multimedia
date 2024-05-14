// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '3/4': '75%', // Add this if you don't have it already
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
