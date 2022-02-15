module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
      white: '#FFF',
      dark: '#3C3C3B',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
