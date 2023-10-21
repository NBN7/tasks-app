import { nextui } from "@nextui-org/react";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "iphone-se": "375px",
      "iphone-xr": "414px",
      "iphone-12-pro": "390px",
      "pixel-5": "393px",
      "galaxy-s8-plus": "360px",
      "galaxy-s20-ultra": "412px",
      "galaxy-fold": "280px",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({ defaultTheme: "dark" })],
};
export default config;
