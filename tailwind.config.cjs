/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A4365',    // глубокий синий
        secondary: '#319795',  // акцентный бирюзовый
        accent: '#4FD1C5',     // светло-бирюзовый
        light: '#F7FAFC',      // светло-серый
        dark: '#2D3748',       // тёмно-серый
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 