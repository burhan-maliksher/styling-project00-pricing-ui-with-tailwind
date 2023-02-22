/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:"rgba(88, 120, 233, 0.9) ",
      },
      fontFamily:{
        inspiration: ['var(--font-inspiration)'],
        jacques_Francois: ['var(--font-jacques-Francois)'],
        imprima: ['var(--font-imprima)'],
      }
    },
  },
  plugins: [],
}
