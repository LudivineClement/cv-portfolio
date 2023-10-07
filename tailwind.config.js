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
        'banner-img': "url('/img/bg-header.webp')",
      },
      colors: {
        'color-dark': '#1A1D2F',
        'color-global': '#666666',
        'color-second': '#6A324A',
        'color-light': '#9D6284',
      },
    },
  },
  plugins: [],
}
