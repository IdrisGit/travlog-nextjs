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
        carousel_shadow: '0px 0px 0px 0px rgba(0,0,0,0.1), 0px 41px 89px 0px rgba(0,0,0,0.1)',
        hero_etw_shadow:
          '0px 0px 0px 0px rgba(0,0,0,0.07), 0px 34px 75px 0px rgba(0,0,0,0.07), 0px 137px 137px 0px rgba(0,0,0,0.06),0px 308px 185px 0px rgba(0,0,0,0.04), 0px 548px 219px 0px rgba(0,0,0,0.01), 0px 856px 240px 0px rgba(0,0,0,0)',
        hero_gs_shadow:
          '0px 0px 0px 0px rgba(0,0,0,0.1), 0px 5px 11px 0px rgba(0,0,0,0.1), 0px 20px 20px 0px rgba(0,0,0,0.09), 0px 45px 27px 0px rgba(0,0,0,0.05), 0px 81px 32px 0px rgba(0,0,0,0.01), 0px 126px 35px 0px rgba(0,0,0,0)',
        hero_icon_shadow:
          '0px 19px 19px 0px rgba(0,0,0,0.09), 0px 43px 26px 0px rgba(0,0,0,0.05), 0px 77px 31px 0px rgba(0,0,0,0.01), 0px 120px 34px 0px rgba(0,0,0,0)',
        hero_icon_tp_shadow:
          '0px 43px 26px 0px rgba(0,0,0,0.05), 0px 77px 31px 0px rgba(0,0,0,0.01), 0px 120px 34px 0px rgba(0,0,0,0)',
      },
    },
  },
  plugins: [],
};
export default config;
