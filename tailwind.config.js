/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
    colors: {
      Purple: "#854DFF",
      Light_red: "#FF5757",
      White: "#FFFFFF",
      Off_white: "#F0F0F0",
      Light_grey: "#DBDBDB",
      Smokey_grey: "#716F6F",
      Off_black: "#141414",
    },
  },
  plugins: [],
};
