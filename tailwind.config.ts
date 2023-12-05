import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[class="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#001B79",
          50: "#f0f7fe",
          100: "#ddecfc",
          200: "#c3defa",
          300: "#9acaf6",
          400: "#69adf1",
          500: "#468eeb",
          600: "#3171df",
          700: "#285ccd",
          800: "#274ca6",
          900: "#254283",
          950: "#203260",
          1000: "#1b2a3e",
        },
        secondary: {
          DEFAULT: "7752FE",
          50: "#f4f2ff",
          100: "#eae8ff",
          200: "#d8d4ff",
          300: "#bbb1ff",
          400: "#9985ff",
          500: "#7752fe",
          600: "#6831f6",
          700: "#591fe2",
          800: "#4a19be",
          900: "#3f179b",
          950: "#250c69",
        },
        negative: {
          DEFAULT: "#FF0000",
          50: "#fff0f0",
          100: "#ffdddd",
          200: "#ffc0c0",
          300: "#ff9494",
          400: "#ff5757",
          500: "#ff2323",
          600: "#ff0000",
          700: "#d70000",
          800: "#b10303",
          900: "#920a0a",
          950: "#500000",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
export default config;
