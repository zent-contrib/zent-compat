const babel = require('@babel/core');
const glob = require('glob');
const path = require('path');
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');

const writeFileP = util.promisify(fs.writeFile);

const babelOptions = {
  caller: {
    name: 'tool',
    supportsStaticESM: true,
    supportsDynamicImport: true,
  },
  generatorOpts: {
    quotes: 'single',
  },
  plugins: [
    [
      'babel-plugin-zent',
      { automaticStyleImport: true, noModuleRewrite: true },
      'zent',
    ],
  ],
};

util
  .promisify(glob)('**/*.js', {
    cwd: path.resolve(__dirname, '../es'),
    absolute: true,
  })
  .then(files => {
    return Promise.all(
      files.map(f =>
        babel
          .transformFileAsync(f, babelOptions)
          .then(ret => writeFileP(f, ret.code))
      )
    );
  })
  .catch(ex => {
    console.error(chalk.red(ex));
  });
