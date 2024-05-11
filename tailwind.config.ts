import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito_sans)'],
        inter: ['var(--font-inter)'],
      },
      boxShadow: {
        discount_shadow:
          '0px 0px 0px 0px rgba(0,0,0,0.03), 0px 15px 34px 0px rgba(0,0,0,0.03), 0px 62px 62px 0px rgba(0,0,0,0.02), 0px 139px 83px 0px rgba(0,0,0,0.01), 0px 246px 99px 0px rgba(0,0,0,0), 0px 385px 108px 0px rgba(0,0,0,0)',
      },
    },
  },
  plugins: [],
};
export default config;
