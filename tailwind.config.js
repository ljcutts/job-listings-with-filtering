module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        job: "#effafa",
        bgImage: "hsl(180, 29%, 50%)",
      },
      margin: {
        70: "70px",
      },
      backgroundImage: {
        close: "url('/public/images/icon-remove.svg')",
        desktop: "url('/public/images/bg-header-desktop.svg')",
        mobile: "url('/public/images/bg-header-mobile.svg')",
      },
      backgroundSize: {
        50: "50%",
        100: "1440px",
        75: "768px",
      },
      width: {
        312: "312px",
        600: "600px",
        800: "900px",
        50: "50px",
        75: "90px",
      },
      minWidth: {
        "18px": "18px",
      },
      height: {
        156: "156px",
        50: "50px",
        75: "90px",
      },
      translate: {
        4: "-1.4rem",
        45: "1rem",
        55: "8.6rem",
        33: "8.6rem",
        close: "-0.25rem",
        closey: "0.5px",
      },
      fontSize: {
        navbar: [
          "9px",
          {
            lineHeight: "1rem",
          },
        ],
        x: [
          "5px",
          {
            lineHeight: "1rem",
          },
        ],
      },
      screens: {
        sm: "640px",
       

        md: "768px",
        

        lg: "1024px",
        

        xl: "1280px",
      
      },
    },
  },
  plugins: [],
};
