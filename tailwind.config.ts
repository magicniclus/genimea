import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: "#1E2849",
        textBlue: "#6B95AE",
        backgroundBlue: "#99D1E5",
        yellow: "#FDBF65",
        white: "#FFFFFF",
        pink: "#F894C0",
        red: "#EE4857",
      },
    },
  },
  plugins: [],
};
export default config;
