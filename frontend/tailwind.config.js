/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#7c3aed",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#5a6c74",
        textColor: "#5a6c74",
      },
      boxShadow: {
        panelShadow:
          "rgba(245, 243, 255, 0.15) 0px 48px 100px 0px, rgba(124, 58, 237, 0.25) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
};
