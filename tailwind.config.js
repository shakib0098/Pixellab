/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#ff6b00",
          light: "#ff8533",
        },
        dark: "#1a1a2e",
      },
    },
  },
  plugins: [],
};
