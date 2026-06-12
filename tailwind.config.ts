import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a4731",
        "primary-dark": "#0e2b1c",
        accent: "#f0e6c8",
        "muted-1": "#7ab891",
        "muted-2": "#a8d4b8",
        "muted-3": "#4a7a5a",
        "green-tint": "#eef5f0",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Montserrat", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
