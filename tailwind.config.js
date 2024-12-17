/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1700px",
      },
      colors: {
        gradient1: "#0575E6",
        gradient2: "#02298A",
        gradient3: "#021B79",
        priBlue: "#0267FF",
        priGray: "#817F9B",
        priBlack: "#1C1A3C",
        btnBlue: "#0457C2",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #0575E6 0%, #02298A 60%, #021B79 100%)",
        "header-gradient": `linear-gradient(90deg, #092975 0%, #0267FF 100%)`,
      },
      fontFamily: {
        "be-vietnam-semiBold": ["BeVietnamPro SemiBold", "sans-serif"],
        "be-vietnam-light": ["BeVietnamPro light", "sans-serif"],
        "be-vietnam-medium": ["BeVietnamPro Medium", "sans-serif"],
        "sf-bold": ["SF Pro Display Bold", "sans-serif"],
        "sf-light": ["SF Pro Display Light", "sans-serif"],
        "sf-medium": ["SF Pro Display Medium", "sans-serif"],
        "sf-semibold": ["SF Pro Display SemiBold", "sans-serif"],
        "graphikl-medium": ["GraphikLCG Medium", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
