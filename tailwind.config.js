/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "poke-red": "#FA342F",
        "poke-green": "#8DC73F",
        "poke-gray": "#656161",
        "poke-cyan": "#01FFFF",
      },
      fontFamily: {
        "start-2p": ['"Press Start 2P"', "cursive"],
      },
    },
  },
  plugins: [],
};
