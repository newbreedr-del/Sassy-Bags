import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#1C1A16",
          light:   "#33302A",
          dark:    "#0F0E0C",
        },
        accent: {
          champagne: "#EDE0C8",
          bronze:    "#8A7A5A",
          warm:      "#C9A87A",
          pink:      "#C9A87A",   // remapped — warm amber replaces old pink
          blush:     "#E8C4A0",
        },
      },
      animation: {
        marquee:       "marquee 28s linear infinite",
        "marquee-rev": "marquee-rev 28s linear infinite",
        float:         "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
}
export default config
