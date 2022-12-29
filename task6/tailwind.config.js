/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    screens: {
      width: "600px",
      imgWidth:"100px",
      imgHeight:"100px",
      mainWidth:"700px"
    },
    extend: {
      colors:{
        'gega-red':"red"
            },
    },
  },
  plugins: [],
};
