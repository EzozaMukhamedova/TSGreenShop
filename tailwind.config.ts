// /** @type {import('tailwindcss').Config} */
// import lineClamp from "@tailwindcss/line-clamp";

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         spinSlow: {
//           "0%, 100%": { transform: "rotate(0deg)" },
//           "50%": { transform: "rotate(360deg)" },
//         },
//       },
//       animation: {
//         spinSlow: "spinSlow 3s linear infinite",
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//       },
//     },
//   },
//   plugins: [lineClamp],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spinSlow: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spinSlow: "spinSlow 3s linear infinite",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [], // ❌ bu yerdan lineClamp ni olib tashlang
};
