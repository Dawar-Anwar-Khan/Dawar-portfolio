/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      fontFamily: {
        fredericka: ['"Fredericka the Great"', 'serif'],
      },
       backgroundImage: {
        'custom-gradient3': 'linear-gradient(180deg, #9CF8E9, #F1EEC8)',
        'custom-gradient2': 'linear-gradient(180deg, #e8f1f8, #cad5e2)',
        'custom-gradient1': 'linear-gradient(180deg, #d1f1f8, #f7f3c7)',
      },
    },
  },
  plugins: [],
}

