/* eslint-disable global-require */

module.exports = {
  plugins: [
    require('zent/plugins/postcss-plugin-constants')(),
    require('autoprefixer')(),
  ],
};
