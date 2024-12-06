/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#343541", // Fondo principal
        sidebar: "#202123", // Fondo del sidebar
        chat: "#444654", // Fondo del chat
        text: "#ececf1", // Texto principal
        accent: "#10a37f", // Verde para acentos
      },
    },
  },
  plugins: [],
}