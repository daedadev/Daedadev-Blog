module.exports = {
  content: {
    content: ["./pages/**/*.js", "./components/**/*.js"],
  },
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
