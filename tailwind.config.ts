import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#93c5fd",
          300: "#60a5fa",
          400: "#3b82f6",
          500: "#1d4ed8",
          600: "#1e40af",
          700: "#1e3a8a",
          800: "#1e3a8a",
          900: "#172554"
        },
        accent: {
          emerald: "#059669",
          amber: "#d97706",
          violet: "#7c3aed"
        }
      },
      fontSize: {
        "base": ["1.125rem", { lineHeight: "1.65" }],
        "lg": ["1.25rem", { lineHeight: "1.6" }],
        "xl": ["1.375rem", { lineHeight: "1.5" }]
      }
    }
  },
  plugins: []
};

export default config;
