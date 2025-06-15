/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        sidebar: "#1F2937",
        bg: "#F9FAFB",
        card: "#FFFFFF",
        textDark: "#111827",
        textLight: "#6B7280",
      },
    },
  },
  plugins: [],
}
