module.exports = function({ types: t }) {
  return {
    name: 'babel-example-plugin',
    visitor: {
      Identifier(path) {
        if (path.node.name === 'hoge') {
          path.node.name = 'fuga';
        }
      }
    }
  };
};
