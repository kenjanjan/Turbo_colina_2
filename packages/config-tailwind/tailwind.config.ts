import type { Config } from "tailwindcss";
// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  darkMode: "selector",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        box: "0px 1px 5px 0px rgba(0, 124, 133, 0.1)",
        "text-logo": "0px 1px 5px 0px rgba(0, 0, 0, 0.3)",
        logo: "0px 1px 9.38px 0px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        dim: {
          DEFAULT: "#777", // Dim base color
          100: "#999", // Lighter dim
          200: "#03595B", // Darker dim
        },
        "primary-mint": {
          50: "#F6FEFF",
          100: "#B0E9ED",
          200: "#7DDAE3",
          300: "#4ACAD7",
          400: "#23BFCF",
          500: "#00B4C8",
          600: "#00A5B6",
          700: "#00909C",
          800: "#007C85",
          900: "#03595B",
        },
        "primary-blue": {
          50: "#F1FAFF",
          100: "#E3F2FD",
          200: "#BBDEFB",
          300: "#90CAF9",
          400: "#64B5F6",
          500: "#42A5F5",
          600: "#2196F3",
          700: "#1E88E5",
          800: "#1976D2",
          900: "#1565C0",
        },
        "primary-sage": {
          50: "#F8FBF2",
          100: "#E4EADB",
          200: "#D9DFD0",
          300: "#D1DBC4",
          400: "#C9D4BA",
          500: "#C3CFB2",
          600: "#B8C6A6",
          700: "#B0BF9B",
          800: "#8FA273",
          900: "#819861",
        },
        "primary-jadeGreen": {
          50: "#F2FFFC",
          100: "#D4FFF4",
          200: "#A0FFE7",
          300: "#7BFADA",
          400: "#68EFCD",
          500: "#58E5C1",
          600: "#46D9B4",
          700: "#39CDA7",
          800: "#24B792",
          900: "#24B792",
        },
        tertiary: {
          50: "#505050",
          100: "#474747",
          200: "#3E3E3E",
          300: "#383838",
          400: "#333333",
          500: "#2A2A2A",
          600: "#232323",
          700: "#1C1C1C",
          800: "#131313",
          900: "#000000",
        },
        gray: {
          50: "#FBFBFB",
          100: "#F6F6F6",
          200: "#F2F2F2",
          300: "#E8E8E8",
          400: "#C6C6C6",
          500: "#A8A8A8",
          600: "#7E7E7E",
          700: "#6A6A6A",
          800: "#4A4A4A",
          900: "#282828",
        },
        sementic: {
          error: "#FF4E31",
          success: "#70B421",
          active: "#42BC24",
          warning: "#FFB326",
          inProgress: "#E1CD1F",
          container: "#FBE72C26",
          blue: "#009AEA",
          "image-opacity": "#24B7921A",
        },
        extended: {
          white: "#FFFFFF",
          "bg-container": "#F3FEFF",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dim"], // Add 'dim' as a variant for background color
    },
  },
  plugins: [

  ],
};
export default config;
