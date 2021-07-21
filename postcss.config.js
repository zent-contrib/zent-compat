/* eslint-disable global-require */

module.exports = {
  plugins: [
    require('./packages/zent-compat/plugins/postcss-plugin-constants')(),
    require('autoprefixer')(),
  ],
};
