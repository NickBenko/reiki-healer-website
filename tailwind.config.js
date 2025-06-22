/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a78bfa', // lila principal
          light: '#c4b5fd',   // lila claro
          dark: '#7c3aed',    // lila profundo
        },
        secondary: {
          DEFAULT: '#ede9fe', // fondo lila muy suave
          accent: '#f3e8ff',  // acento lila pastel
        },
      },
    },
  },
  plugins: [],
} 