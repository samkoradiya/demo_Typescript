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
      colors:{
        black:{
          1:"#212121",
        },
        orange:{
          1:"#D86161",
        },
        blue:{
          1:"#1597E4",
        },
        white:{
          1:"#ffffff",
        },
        red:{
          1:"#D86161",
        },
      },
      backgroundColor:{
        blue:{
          1:"#1597E4",
        },
        white:{
          1:"#ffffff",
          2:"#FAFAFA",
          3:"#F2F5F7",
        },
        gray:{
          1:"#E6E6E6",
          2:"#DADEDF",
          3:"#D8D8D8",
        },
      },
      borderColor:{
        gray:{
          1:"#E6E6E6",
          2:"#DADEDF",
        },
        blue:{
          1:"#1597E4"
        },
        balck:{
          1:"#000000",
        },
      },
    },
  },
  plugins: [],
}
export default config
