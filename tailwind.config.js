const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        blue: {
          0: "#000B49",
          1: "#FAFAFA",
          2: "#F5F6FE",
          3: "#111D5E",
          4: "#08A69B"
        },
        green: {
          0: "#38BDAB",
        },
        gray: {
          0: "#8C8C8C",
          1: "#595959",
          2: "#404040", 
          3: " #D9D9D9" 
        }
      },
    },
  },
  plugins: [],
};
