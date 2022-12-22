/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cardBG: "rgba(var(--color-cardBG), .80)",
      },
    },
  },
  plugins: [],
};
