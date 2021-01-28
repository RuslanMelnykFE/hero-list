const path = require('path');

module.expports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: ' @import "@/assets/fonts/_fonts.scss"; ',
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@scss': path.resolve(__dirname, 'src/assets/scss'),
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
  },
};
