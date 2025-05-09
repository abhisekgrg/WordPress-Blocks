/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{php,js,jsx}',
    './build/**/*.php'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}