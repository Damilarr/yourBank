/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        col60: "#CAFF33",
        col65: "#D1FF4C",
        col70: "#D8FF66",
        col80: "#D5FF99",
        col90: "#F2FFCC",
        col95: "#F8FFE5",
        col97: "#FBFFF0",
        col99: "#FEFFFA",
        wh90: "#E4E4E7",
        wh95: "#F1F1F3",
        wh97: "#F7F7F8",
        wh99: "#FCFCFD",
        grey10: "#191919",
        grey11: "#1c1c1c",
        grey15: "#262626",
        grey20: "#333333",
        grey30: "#4c4c4d",
        grey35: "#59595A",
        grey40: "#656587",
        grey60: "#98989A",
        grey70: "#B3B3B3",
        grey75: "#BFBFBF",
      },
      backgroundImage: {
        CareerHero: "url('/CareerHero.png')",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
