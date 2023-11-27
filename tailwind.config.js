/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      sm2: "635px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1219px"
    },
    extend: {
      colors: {
        background: "#2B2B2B",
        backgroundSecondary: "#3B3B3B",
        darkGrey: "#858584",
        textColor: "#FFFFFF",
        ctaColor: "#A259FF",
        blue: "#377DF7",
        red: "#FF7262",
        // gradient1: "#FF7262",
        gradient2: "#A259FF",
      },
    },
  },
  plugins: [],
};
