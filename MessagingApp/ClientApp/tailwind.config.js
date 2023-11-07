/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      white: 'rgb(var(--color-white) / <alpha-value>)',
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
      dark: 'rgb(var(--color-dark) / <alpha-value>)',
      darkSecondary: 'rgb(var(--color-dark-secondary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
    },
    extend: {},
  },
  plugins: [],
}

