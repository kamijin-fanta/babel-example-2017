import plugin from './index';
import pluginTester from 'babel-plugin-tester';
import path from 'path';

pluginTester({
  plugin,
  fixtures: path.resolve(__dirname, '__fixtures__'),
  pluginOptions: {
  },
});

pluginTester({
  plugin,
  tests: [
    {
      title: 'basic example',
      code: `console.log(hoge);`,
      output: `console.log(fuga);`,
    },
  ],
});

pluginTester({
  plugin,
  snapshot: true,
  tests: [
    {
      title: 'snapshot test',
      code: `console.log(hoge);`,
    },
  ],
});
