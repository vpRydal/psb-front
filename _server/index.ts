import 'ignore-styles';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import register from '@babel/register';

const tsConfigPaths = require('tsconfig-paths');

const tsConfig = require('../tsconfig.json');

(tsConfigPaths.register({
  baseUrl: tsConfig.compilerOptions.baseUrl,
  paths: tsConfig.compilerOptions.paths,
}))();

register({
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
  plugins: [
    '@loadable/babel-plugin',
  ],
});

import('./App');
