/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: `rgba(255, 255, 255, 0.8)`,
        border: `rgba(255, 203, 128, 1)`,
        gold: `rgba(255, 204, 128, 1)`,
      },
    },
  },
  plugins: [],
};
