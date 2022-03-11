import path from "path";

import PATH from "../path";
import {IS_DEV} from "../constants";

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export default             {
  test: /\.(scss|css)$/,
  use: [
    ...(IS_DEV ? [
      {
        loader: require.resolve('style-loader')
      }
    ] : []),
    ...(!IS_DEV ? [
      {
        loader: MiniCssExtractPlugin.loader
      }
    ] : []),
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
      options: {config: {path: path.join(PATH.root, 'postcss.config.js')}, sourceMap: !IS_DEV}
    },
    {
      loader: require.resolve('resolve-url-loader'),
      options: {
        sourceMap: !IS_DEV,
        root: PATH.client,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: !IS_DEV
      }
    }
  ],
  exclude: /\.module\.(scss|css)$/
}
