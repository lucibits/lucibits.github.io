/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif', 'ui-serif'],
        mono: ['Space Mono', 'mono']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    },
  },
  plugins: [],
}

