/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFE5E5",
        secondary: "#EEDCCE",
        background: "#172b4d",
        info: "#11cdef",
        success: "#2dce89",
        danger: "#f5365c",
        warning: "#fb6340",
        gray: {
          c1: "#f6f9fc",
          c2: "#e9ecef",
          c3: "#dee2e6",
          c4: "#ced4da",
          c5: "#adb5bd",
          c6: "#8898aa",
          c7: "#525f7f",
          c8: "#32325d",
          c9: "#212529",
        },
      },
      fontFamily: {
        body: "OpenSans, sans-serif",
        roboto: "Roboto, sans-serif",
        inter: "Inter, sans-serif",
        grotesk: "Space Grotesk, sans-serif",
      },
    },
  },
  plugins: [
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    }),
  ],
  corePlugins: {
    container: false,
  },
};
