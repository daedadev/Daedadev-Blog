module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        1280: "1280px",
        748: "748px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
