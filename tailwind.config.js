/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#19ce67", // rgb(25,206,103)
        secondary: "#121521", // rgb(18,21,33)
        textPrimary: "#7D7D7D", // rgb(125,125,125)
      },
      backgroundImage: {
        "map-pattern": "url('/src/assets/map-bg.png')",
      },
      backgroundColor: {
        "section-main": "#fefefe", // rgb(254,254,254)
        "alt-section": "#f4f9fd", // rgb(244,249,253)
      },
      boxShadow: {
        pick: "0 10px 55px 5px rgba(137, 173, 255, 0.2)",
        appointment: "0 2px 48px 0 rgba(0, 0, 0, 0.08)",
        doctor: "0 10px 55px 5px rgba(137, 173, 255, 0.1)",
        "mission-circle": "0 10px 55px 5px rgba(137, 173, 255, 0.3)",
      },
      borderRadius: {
        pick: "70% 30% 30% 70% / 60% 40% 60% 40%",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};
