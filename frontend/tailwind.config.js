import withMT from "@material-tailwind/react/utils/withMT";

/** Same as `basePath` in next.config — used for `url()` in generated CSS. */
const ASSET_BASE = process.env.NEXT_PUBLIC_BASE_PATH || "/bootcamp";

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        offWhite: "#FAFAFA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dmSerifDisplay: ["DM Serif Display", "serif"],
        sfPro: ["SF Pro Display", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        "sf-pro-display": ["SF Pro Display", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "corper-bg": `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${ASSET_BASE}/images/corperBg.png')`,
        "hero-bg": "linear-gradient(96.95deg, #0F7A00 0%, #2E9E10 100%)",
      },

      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        70: "70%",
        80: "80%",
        90: "90%",
        100: "100%",
      },
    },
  },
  plugins: [],
});
