module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Montserrat"', 'Roboto', '"Helvetica Neue"'],
      serif: ['Spectral', '"Times New Roman"', 'Times', 'serif'],
      mono: ['"Roboto Mono"', '"Courier New"', 'monospace'],
    },
    colors: {
      beige: '#FFF7F2',
      redpink: '#F07683',
      lilac: '#666589',
      pink: '#E0BBCE',
      orange: '#EC9427',
      rosa: '#FDC5BC',
      yellow: '#F8C86C',
      white: '#FFF',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
