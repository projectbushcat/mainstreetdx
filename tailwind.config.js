/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both"
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)"
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)"
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)"
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)"
          }
        }
      },
      colors: {
        "main-green": "#007A53",
        "main-blue": "#0F398B",
        "main-yellow": "#FDDA16",
        "main-orange": "#FF621A",
        "main-gray": "#303030",
        "main-gray-secondary": "#CFCFCF",
        "surface-green": "#E5F0EC",
        "surface-blue": "#E5E9F0",
        "surface-yellow": "#F0EEE5",
        "surface-orange": "#F0E9E5",
        "surface-gray": "#F0E5E5",
        "required-red": "#B30000"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontSize: {
        headline: ["1.5rem", { lineHeight: "1.875rem", fontWeight: 590 }],
        subhead: ["1.25rem", "1.5rem"],
        hero: ["2.5rem", { lineHeight: "2.5rem", fontWeight: 620 }],
        body: ["1.125rem", "1.5rem"],
        label: ["1.25rem", { lineHeight: "1.5rem", fontWeight: 590 }],
        mono: ["1rem", { lineHeight: "1.875rem", fontWeight: 590 }]
      },
      lineHeight: {
        decoration: "3.25rem"
      }
    }
  },
  plugins: []
};
