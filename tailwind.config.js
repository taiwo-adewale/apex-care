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
      spacing: {
        "25px": "1.5625rem",
        "30px": "1.875rem",
      },
      fontSize: {
        "13px": "0.8125rem",
        "15px": "0.9375rem",
        "17px": "1.0625rem",
        "20px": "1.25rem",
      },
      backgroundColor: {
        "section-main": "#fefefe", // rgb(254,254,254)
        "alt-section": "#f4f9fd", // rgb(244,249,253)
      },
      boxShadow: {
        nav: "0px 15px 10px -15px rgba(0, 0, 0, 0.04)",
        "nav-mobile": "0 7px 13px 0 rgba(0, 0, 0, 0.1)",
        pick: "0 10px 55px 5px rgba(137, 173, 255, 0.2)",
        appointment: "0 2px 48px 0 rgba(0, 0, 0, 0.08)",
        doctor: "0 10px 55px 5px rgba(137, 173, 255, 0.1)",
        "mission-circle": "0 10px 55px 5px rgba(137, 173, 255, 0.3)",
        faq: "0 0 1.25rem rgba(108, 118, 134, 0.1)",
        feedback: "0 10px 55px 5px rgba(137, 173, 255, 0.2)",
        "feedback-layer": "0 30px 10px -20px rgba(0, 0, 0, 0.04)",
        "feedback-layer-2": "0 30px 10px -20px rgba(0, 0, 0, 0.03)",
        input: "0px 5px 28.5px 1.5px rgba(149, 152, 200, 0.2)",
        "contact-icon": "0 1px 3px 1px #19ce67",
      },
      borderRadius: {
        pick: "70% 30% 30% 70% / 60% 40% 60% 40%",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        moveBounce: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(20px)",
          },
        },
        spinReverse: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        navDrop: {
          "0%": {
            top: "-90px",
          },
          "100%": {
            top: 0,
          },
        },
      },
      animation: {
        moveBounce: "moveBounce 5s linear infinite",
        "spin-slow": "spin 40s linear infinite",
        "spin-reverse-slow": "spinReverse 40s linear infinite",
        "nav-drop": "navDrop 0.5s ease-in-out forwards",
        "nav-bounce": "bounce 0.5s linear infinite",
      },
    },
  },
};
