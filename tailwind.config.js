/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: '#1a1a2e',
        dark: '#0f0f1a',
        primary: '#4F46E5',
        secondary: '#6366F1',
        accent: '#818CF8'
      }
    },
  },
  plugins: [],
} 