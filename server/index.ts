// @ts-ignore
import register from '@babel/register';

register({
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
  plugins: [
    '@loadable/babel-plugin'
  ]
});

import './App'
