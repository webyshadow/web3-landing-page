import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        flip: {
          "0%": { transform: "rotateX(90deg)", opacity: "0" },
          "50%": { transform: "rotateX(0deg)", opacity: "1" },
          "100%": { transform: "rotateX(-90deg)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
          flip: "flip 2s ease-in-out"
      },
    },
  },
  plugins: [],
}
export default config
