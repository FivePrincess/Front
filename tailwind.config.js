// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}", // JS, TS, JSX, TSX 파일을 포함
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"], // 기본 글꼴을 Inter로 설정
      },
      colors: {
        "purple-dark": "#4A20E1",
        "purple-main": "#7153DD",
        "purple-medium": "#B9ABFF",
        "purple-light": "#EAE4FF",

        red: "#FF5D5A",
        orange: "#FF7F00",
        "yellow-main": "#FFC83A",
        "yellow-light": "#FFEF5E",
        "yellow-baby": "#FFFAD6",

        black: "#000000",
        "gray-main": "#747D8F",
        "gray-stroke": "#C8D1E2",
        "gray-light": "#F8F9FB",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
