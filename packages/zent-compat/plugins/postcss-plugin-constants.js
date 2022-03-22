/* eslint-disable prefer-arrow-callback */

/**
 * 同步 zent 中新版本
 */
const parseValue = require('postcss-value-parser');
const constants = require('zent/plugins/css-compiler-constants');

const CompilerConstants = Object.keys(constants).reduce((acc, k) => {
  acc[`--${k}`] = `${constants[k]}px`;
  return acc;
}, {});

const hasOwn = Object.prototype.hasOwnProperty;

module.exports = () => {
  return {
    postcssPlugin: 'postcss-plugin-constants',
    Declaration(decl) {
      const valueNode = parseValue(decl.value);
      let modified = false;

      valueNode.walk((node, idx, nodes) => {
        const variable = getCSSVariableName(node);
        if (!variable) {
          return;
        }

        const { name, sign } = variable;
        if (name && hasOwn.call(CompilerConstants, name)) {
          nodes[idx] = {
            type: 'word',
            value: `${sign}${CompilerConstants[name]}`,
            sourceIndex: node.sourceIndex,
          };
          modified = true;
        }
      });

      if (modified) {
        decl.value = valueNode.toString();
      }
    },
  };
};
module.exports.postcss = true;

function getCSSVariableName(node) {
  if (node.type === 'function') {
    const match = /([-+]?)var/i.exec(node.value);
    if (!match) {
      return null;
    }

    const sign = match[1];
    const args = node.nodes;

    if (args.length === 1) {
      const nameNode = args[0];
      const propName = nameNode.value;

      if (nameNode.type === 'word' && propName.startsWith('--')) {
        return {
          name: propName,
          sign,
        };
      }
    }
  }

  return null;
}
