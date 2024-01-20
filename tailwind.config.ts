import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-charcoal': '#121212',
        'brand-space': '#6B6B6B',
        'brand-pistachio': '#ef4db5',
        'brand-leaf': '#018369',
        'brand-sea': '#c5fff8',
      },
    },
  },
  plugins: [],
};
export default config;
