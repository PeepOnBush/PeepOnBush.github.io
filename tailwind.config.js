/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This tells Tailwind to look at your React files
  ],
  darkMode: 'class', // This allows our manual Dark Mode button to work!
  theme: {
    extend: {},
  },
  plugins: [],
}