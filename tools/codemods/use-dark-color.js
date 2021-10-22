// yarn codemod --plugin ./tools/codemods/use-dark-color.js packages/

'use strict';

module.exports = ({ types }) => ({
  visitor: {
    JSXAttribute({ node }) {
      if (
        types.isStringLiteral(node.value) &&
        node.value.value.startsWith('Grey')
      ) {
        node.value = types.stringLiteral(
          node.value.value.replace('Grey', 'Dark'),
        );
      }
    },
    MemberExpression(path) {
      const { node } = path;

      if (
        node.object.name === 'Color' &&
        types.isIdentifier(node.property) &&
        node.property.name.startsWith('Grey')
      ) {
        node.property = types.identifier(
          node.property.name.replace('Grey', 'Dark'),
        );
      }
    },
  },
});
