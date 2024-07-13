import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        event: {
          100: "#073BA3",
          200: "#782794",
          300: "#6C80D6",
          400: "#4B2292",
        },
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
});

export default config;
