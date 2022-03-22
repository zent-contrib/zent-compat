import * as ts from 'typescript';
import * as pkg from '../package.json';

type ConstantType = number | string;

/**
 * Define compiler constants here.
 *
 * Keys are variables names, these variables will be replaced by their value during compile.
 *
 * Value type must be correct, don't use a string for a number constant.
 */
const BuiltinConstants: Record<string, ConstantType> = {
  __ZENT_COMPAT_VERSION__: pkg.version,
};

const hasOwn = Object.prototype.hasOwnProperty;

export default function compilerConstantsTransformer(_program: ts.Program) {
  function createVisitor(ctx: ts.TransformationContext) {
    const visitor: ts.Visitor = (node: ts.Node) => {
      if (ts.isIdentifier(node)) {
        const { text: idName } = node;
        if (hasOwn.call(BuiltinConstants, idName)) {
          const value = BuiltinConstants[idName];
          if (typeof value === 'string') {
            return ts.factory.createStringLiteral(value);
          } else if (typeof value === 'number') {
            return ts.factory.createNumericLiteral(value);
          } else {
            throw new Error(`unknow constant type ${value}`);
          }
        }
      }

      return ts.visitEachChild(node, visitor, ctx);
    };

    return visitor;
  }

  return (ctx: ts.TransformationContext) => {
    return (src: ts.SourceFile) => {
      return ts.visitNode(src, createVisitor(ctx));
    };
  };
}
