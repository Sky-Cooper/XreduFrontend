/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        300: "300ms",
        400: "400ms",
        500: "500ms",
        900: "900ms",
      },

      backgroundImage: {
        "light-gradient": "linear-gradient(120deg, #007AFF, #5A3CEE, #AD03DE)",
        "dark-gradient": "linear-gradient(120deg, #022F66, #41077E, #44067F)",
      },

      colors: {
        "container-text-color": "#CCE5FF",
        "soft-light-back": "#F2F2F2F2",
        "electric-blue-50": "#E5F2FF",
        "electric-blue-700": "#004A99",
        "gray-800": "#2A2D32",
        "gray-600": "#565C67",
        "success-back": "#CCF0EB",
        "error-back": "#FCD7D4",
        "warning-back": "#FFF3D6",
        "success-text-color": "#00B69B",
        "error-text-color": "#EF3826",
        "warning-text-color": "#FEC53D",

        light: {
          back: "#FFFFFF",
          "primary-color": "#007AFF",
          "secondary-color": "#AD03DE",
          "disabled-color": "#66B0FF",
        },

        dark: {
          back: "#001933",
          "primary-color": "#003166",
          "secondary-color": "#44067F",
          "disabled-color": "#0063CC",
        },
      },
      fontSize: {
        xs: "10px",
        sm: "13px",
        base: "16px",
        lg: "20px",
        xlg: "25px",
        huge: "31px",
        xh: "36px",
        sxh: "41px",
      },
      fontFamily: {
        grot: ["Overused Grotesk", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      borderRadius: {
        lg: "25px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
