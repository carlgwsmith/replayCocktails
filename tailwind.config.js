/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '0px',
      'iphone':'440px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdlg':'800px',
      'lgsm':'940px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'gunmetal': '#272d2d',
        'graypurple': '#534c57',
        'alice': '#edf5fc',
        'celadon': '#88E2B4',
        'emerald': '#23CE6B',
        'snow': '#FFFAFB',
        'background-light':'#FFFCF4',
      }
    },
  },
  plugins: [],
}