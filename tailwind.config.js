/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif']
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#19ce67", // rgb((25,206,103))
        secondary: "",
        header: "#f4f9fd"
      },
    },
  },
};
