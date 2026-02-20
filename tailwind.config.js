/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'goldsmith': {
          bg: '#F2F0E9',
          dark: '#1A1A1A',
          green: '#2E4036',
          orange: '#CC5833',
        }
      }
    },
  },
  plugins: [],
}