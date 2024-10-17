/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens :{
        "xs" : "400px"
      },
        colors: {
          'greyblur': 'rgba(32, 34, 37, .99)',
        }
    },
    keyframes: {
      slidein: {
        from: {
          opacity: "0",
          transform: "translateY(20px)",
        },
        to: {
          opacity: "1",
          transform: "translateY(0px)",
        },
      },
      slideinup: {
        from: {
          opacity: "0",
          transform: "translateY(-20px)",
        },
        to: {
          opacity: "1",
          transform: "translateY(0px)",
        },
      },
    },
    animation: {
      slidein200: "slidein 1s ease 200ms forwards",
      slidein300: "slidein 1s ease 300ms forwards",
      slidein500: "slidein 1s ease 500ms forwards",
      slidein700: "slidein 1s ease 700ms forwards",
      slideinup200: "slideinup 1s ease 200ms forwards",
      slideinup300: "slideinup 1s ease 300ms forwards",
      slideinup500: "slideinup 1s ease 500ms forwards",
      slideinup700: "slideinup 1s ease 700ms forwards",
    },
  },
  plugins: [],
}