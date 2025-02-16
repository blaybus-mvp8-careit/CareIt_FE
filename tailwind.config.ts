import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      colors: {
        customGreen: '#02B68A',
        customLightGreen: '#02B68AE6',
        customBlue: '#018ABE',
        customLightBlue: '#018ABEE6',
        customRed: '#FF5E5E',
        customLightRed: '#FF5E5EE6',
        buttonGray: '#D9D9D9',
        barGray: '#B4B4B489',
        textGray: '#767676',
      },
    },
  },
  plugins: [],
} satisfies Config
