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
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#172554"
        }
      },
      boxShadow: {
        "soft": "0 2px 8px -2px rgb(0 0 0 / 0.08), 0 4px 12px -4px rgb(0 0 0 / 0.06)",
        "card": "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)"
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
