module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontWeight: {
      light: 400,
      medium: 500,
      bold: 700,
    },

    extend: {
      colors: {
        black: "#000000",
        "light-black": "#343a40",
        "dark-blue": "#00000c",
        "light-blue": "#586f7c",
        blue: "#16121d",
        cyan: "#b8dbd9",
        "graish-blue": "#f4f4f9",
        white: "#fff",
        grey: "#d3d3d3",
      },
      boxShadow: {
        sm: "-5px 5px 12px rgba(255,255,255,0.6), 5px 5px 12px rgba(0,0,0)",
      },
      backgroundImage: {
        "hero-background": "url(./assets/bg-img.png)",
      },
      blur: {
        xs: "2px",
      },
      height: {
        20: "20vh",
        25: "25vh",
        30: "30vh",
        40: "40vh",
        60: "60vh",
        80: "80vh",
        50: "50vh",
        70: "70vh",
        90: "90vh",
        95: "95vh",
      },
      spacing: {
        10: "10rem",
        40: "40rem",
        50: "50rem",
      },
      fontFamily: {
        BebasNeue: ['Bebas Neue', 'serif'],
      }
    },
  },
  plugins: [],
};
