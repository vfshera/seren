/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "#A3753A",
        gray: {
          1: "#1A1A1A",
          2: "#1E1E1E",
        },
        blue: "#0071AA",
        aqua: "#00FFFF",
      },
    },
  },
  plugins: [],
};
