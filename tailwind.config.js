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
      white: '#FFF',
      darkSalmon: '#DE9979',
      raisinBlack: '#20171A',
      cultured: '#F5F5F5',
      chestnut: '#9E513E',
      camel: '#CE9964',
      sonicSilver: '#706F6E',
      paleSilver: '#CFC3B7',
      cadetGrey: '#8197A0',
      charcoal: '#1D3E49',
    },
    extend: {},
  },
  plugins: [],
};
