/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        container: "var(--container)",
        "primary": "var(--text-primary)",
        "secondary": "var(--text-secondary)",
        "accent-primary": "var(--accent-primary)",
        "accent-secondary": "var(--accent-secondary)",
        "accent-tertiary": "var(--accent-tertiary)",
        "border-color": "var(--border-color)",
        "shadow-light": "var(--shadow-light)",
        "shadow-medium": "var(--shadow-medium)",
        overlay: "var(--overlay-gradient)",
      },
    },
  },
  plugins: [],
}

