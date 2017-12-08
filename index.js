module.exports = function({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        if (path.node.name === 'hoge') {
          path.node.name = 'fuga';
        }
      }
    }
  };
};
