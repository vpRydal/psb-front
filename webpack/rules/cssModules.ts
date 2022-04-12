import path from "path";

import {defaultRootPath, getPath, TWebpackPaths} from "../path";
import {IS_DEV} from "../constants";

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export function getModuleCssRules(paths: TWebpackPaths, isSsr?: boolean) {
  return {
    test: /\.module\.(scss|css)$/,
    use: [
      ...((IS_DEV && !isSsr) ? [
        {
          loader: require.resolve('style-loader')
        }
      ] : []),
      ...(isSsr || !IS_DEV ? [
        {
          loader: MiniCssExtractPlugin.loader
        }
      ] : []),
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          localIdentName: IS_DEV ? '[name]_[local]--[hash:base64:2]' : '[hash:base64:8]'
        }
      },
      {
        loader: 'postcss-loader',
        options: {config: {path: path.join(paths.root, 'postcss.config.js')}, sourceMap: !IS_DEV}
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: !IS_DEV
        }
      }
    ],
    include: /\.module\.(scss|css)$/
  }
}

export default getModuleCssRules(getPath(defaultRootPath))
