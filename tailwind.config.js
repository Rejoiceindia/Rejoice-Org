/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Using class and custom attribute selector
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Make sure all your components are covered
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
