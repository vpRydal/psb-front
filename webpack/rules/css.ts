import path from 'path';

import { IS_DEV } from '../constants';
import { getPath, TWebpackPaths } from '../path';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export function getCssRules(paths: TWebpackPaths, isSsr?: boolean) {
  return {
    test: /\.(scss|css)$/,
    use: [
      ...((IS_DEV && !isSsr) ? [
        {
          loader: require.resolve('style-loader'),
        },
      ] : []),
      ...(isSsr || !IS_DEV ? [
        {
          loader: MiniCssExtractPlugin.loader,
        },
      ] : []),
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: { config: { path: path.join(paths.root, 'postcss.config.js') }, sourceMap: !IS_DEV },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: !IS_DEV,
        },
      },
    ],
    exclude: /\.module\.(scss|css)$/,
  };
}

export default getCssRules(getPath(path.resolve(__dirname, '../')));
