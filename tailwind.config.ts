import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "25rem",
      sm: "40rem",
      md: "48rem",
      lg: "64rem",
      xl: "80rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mexRed: "#C8102E",
        mexGreen: "#006341",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
