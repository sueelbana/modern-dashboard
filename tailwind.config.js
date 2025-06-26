/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        bg: "var(--color-bg)",
        card: "var(--color-card)",
        text: "var(--color-text)",
        "text-secondary": "var(--color-text-secondary)",
        border: "var(--color-border)",
        hover: "var(--color-hover)",
      },
    },
  },
  plugins: [require('tailwindcss-rtl'),
],
};
