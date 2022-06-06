const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/data/*.json",
  ],
  theme: {
    extend: {
      violet: colors.violet,
      spacing: {
        "full-content": "calc(100vh - 3.5rem)", //3.5rem = h-14, nav height
        "full-content-md": "calc(100vh - 5rem)", //5rem = h-20, nav height

        "last-content": "calc(100vh - 3.5rem - 4rem)", //3.5rem = h-14, nav height
        "last-content-md": "calc(100vh - 5rem - 4rem)", //5rem = h-20, nav height
      },
      minHeight: {
        "full-content": "calc(100vh - 3.5rem)", //3.5rem = h-14, nav height
        "full-content-md": "calc(100vh - 5rem)", //5rem = h-20, nav height

        "last-content": "calc(100vh - 3.5rem - 4rem)", //3.5rem = h-14, nav height
        "last-content-md": "calc(100vh - 5rem - 4rem)", //5rem = h-20, nav height
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
