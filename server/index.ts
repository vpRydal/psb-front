import registerIgnoreStyle from "ignore-styles";
// @ts-ignore
import register from '@babel/register';

registerIgnoreStyle(['.sass', '.scss'])
register({
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
  plugins: [
    '@loadable/babel-plugin'
  ]
});

import './App'
