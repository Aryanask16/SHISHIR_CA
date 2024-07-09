/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      colors: {
        white: "#fff",
        lavender: {
          "100": "#d8e7fd",
          "200": "#d4e1ff",
          "300": "#d3def7",
        },
        darkslateblue: "#392d82",
        mediumblue: "rgba(9, 67, 255, 0.71)",
        gainsboro: "#e6e6e6",
        darkblue: "#012ab0",
        midnightblue: {
          "100": "#022083",
          "200": "#021f7e",
        },
        blue: "#0000fb",
        royalblue: {
          "100": "#5c87ff",
          "200": "#567eff",
        },
        indigo: "#501b88",
        mediumslateblue: "#426eff",
        "primary-50": "#eef0ff",
      },
      spacing: {},
      fontFamily: {
        "satoshi-variable": "'Satoshi Variable'",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "6xs": "7px",
        xl: "20px",
        "3xs": "10px",
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      "9xl": "28px",
      "3xl": "22px",
      "17xl": "36px",
      "10xl": "29px",
      sm: "14px",
      "3xs": "10px",
      "21xl": "40px",
      "13xl": "32px",
      "35xl": "54px",
      "24xl": "43px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
