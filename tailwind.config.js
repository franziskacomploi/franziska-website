module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Montserrat"', 'Roboto', '"Helvetica Neue"'],
      serif: ['Fuzzy Bubbles', '"Times New Roman"', 'Times', 'serif'],
      mono: ['"Roboto Mono"', '"Courier New"', 'monospace'],
    },
    colors: {
      beige: '#F7F5F5',
      redpink: '#F07683',
      lilac: '#666589',
      pink: '#E0BBCE',
      orange: '#EC9427',
      rosa: '#FDC5BC',
      yellow: '#F8C86C',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
