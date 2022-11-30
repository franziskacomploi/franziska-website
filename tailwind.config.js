/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'Roboto', '"Helvetica Neue"'],
      serif: ['Glamour Absolute', 'Spectral', 'Times', 'serif'],
      mono: ['"Roboto Mono"', '"Courier New"', 'monospace'],
    },
    colors: {
      beige: '#FFF5EE',
      orange: '#D97456',
      rosa: '#E7A292',
      mint: '#B1BFBC',
      darkMint: '#8AAFAD',
      rusty: '#A95039',
      yellow: '#D18636',
      dark: '#3C3C3B',
      white: '#FFF',
    },
    extend: {},
  },
  plugins: [],
};
