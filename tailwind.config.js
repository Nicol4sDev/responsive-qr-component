const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      './index.html',
      './src/**/*.{vue,js,ts}',
      // etc.
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'qr-shadow': '0px 25px 25px rgba(0, 0, 0, 0.0476518);',
      }
    },
  },
}