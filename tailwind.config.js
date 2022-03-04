module.exports = {
  content: {
    content: ["./pages/**/*.js", "./components/**/*.js"],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
