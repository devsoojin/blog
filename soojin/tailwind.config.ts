import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'mainGreen': "#00A19D",
        'mainYellow': "#F8B400",
        'mainRed': '#FF6363',
        'mainPurple': "#9768CF",
        'mainDGreen': "#125B50",
        'mainBlue': "#277BC0",
        'ivory': "#277BC0",
        'dartGrey': '#3B3B3B'
      }
    },
  },
  plugins: [],
}
export default config
