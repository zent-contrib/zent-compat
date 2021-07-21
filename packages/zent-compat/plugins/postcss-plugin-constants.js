/* eslint-disable prefer-arrow-callback */

/**
 * zent 里的是 postcss@8 的版本，这是拷贝过来的老版本
 *
 * postcss@8 的插件定义和遍历API发生了变化
 */
const postcss = require('postcss');
const parseValue = require('postcss-value-parser');
const constants = require('zent/plugins/css-compiler-constants');

const CompilerConstants = Object.keys(constants).reduce((acc, k) => {
  acc[`--${k}`] = `${constants[k]}px`;
  return acc;
}, {});

module.exports = postcss.plugin('postcss-plugin-constants', () => {
  return root => {
    root.walkRules(function(rule) {
      rule.walkDecls(function(decl) {
        const valueNode = parseValue(decl.value);
        let modified = false;

        valueNode.walk((node, idx, nodes) => {
          const variable = getCSSVariableName(node);
          if (!variable) {
            return;
          }

          const { name, sign } = variable;
          if (name && CompilerConstants.hasOwnProperty(name)) {
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
      });
    });
  };
});

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
