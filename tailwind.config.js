/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        orange: "hsl(26, 100%, 55%)",
        azure: "hsl(185, 80%, 52%)",
        paleOrange: "hsl(25, 100%, 94%)",
        paleazure: "hsl(185, 30%, 90%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        lightBlack : "rgba(0, 0, 0, 0.75);"
        
      },
      screens: {
        sm: "376px",
        md: "768px",
        bp1: "500px",   // From 500px, use 2 columns
        bp2: "800px",   // From 800px, use 3 columns
        bp3: "1200px"  // From 1200px, use 4 columns
      }
    },
  },
  plugins: [],
}
