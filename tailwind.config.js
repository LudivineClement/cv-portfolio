/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      flex: {
        '0': '0 0 auto'
      },
      backgroundImage: {
        'banner-img': "url('/img/banner-home.webp')",
        'repeating-radial-gradient': '-webkit-repeating-radial-gradient(center center, #B378A0, #B378A0 1px, transparent 0px, transparent 100%)',
      },
      backgroundSize: {
        '6px': '6px 6px',
      },
      animation: {
        'animationMouse': 'animationMouse 1.5s ease-in-out 0s normal none infinite',
      },
      colors: {
        'color-dark': '#1A1D2F',
        'color-global': '#5A626B',
        'color-purple': '#9D6284',
        'color-light': '#B378A0',
      },
    },
  },
  plugins: [],
}
