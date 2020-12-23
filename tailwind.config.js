module.exports = {
  purge: ['./src/**/*.ejs'],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
