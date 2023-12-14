const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: '#492F92',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      // 'sm': '640px',
      // 'md': '768px',
      'lg': '1024px',
      // 'xl': '1280px',
    }
  },
  variants: {},
  plugins: [],
}
