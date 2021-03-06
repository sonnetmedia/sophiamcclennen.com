const colors = require("tailwindcss/colors");
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: require("./purge.config.js"),
  theme: {
    container: {
      center: true,
      // "2xl": "1100px",
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        // xl: '4rem',
      },
    },
    extend: {
      colors: {
        gray: colors.blueGray,
      },
      fontFamily: {
        sans: [
          "Work Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "Lora",
          "Palatino Linotype",
          "Palatino",
          "Palladio",
          "URW Palladio L",
          "Book Antiqua",
          "Baskerville",
          "Bookman Old Style",
          "Bitstream Charter",
          "Nimbus Roman No9 L",
          "Garamond",
          "Apple Garamond",
          "ITC Garamond Narrow",
          "New Century Schoolbook",
          "Century Schoolbook",
          "Century Schoolbook L",
          "Georgia",
          "serif",
        ],
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
