/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "main-green": "#007A53",
        "main-gray": "#4D4D4D",
        "surface-dark": "#EBF0EE",
        "surface-dark-h": "#DCE5E1",
        "surface-light": "#FCFEFD",
        "surface-light-h": "#ECF9F2"
      },
      spacing: {
        DEFAULT: "2rem",
        sm: ".25rem",
        md: ".5rem",
        lg: "1rem"
      },
      borderRadius: {
        DEFAULT: "6px",
        lg: "1rem"
      },
      ringWidth: {
        6: "6px"
      }
    }
  },
  plugins: []
};
