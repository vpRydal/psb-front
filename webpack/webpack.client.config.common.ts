import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import webpack, { Configuration } from 'webpack';

import commonPlugins from './common-plugins';
import { IS_DEV } from './constants';
import { defaultRootPath, getPath, TWebpackPaths } from './path';
import resolve from './resolve';
import { getCssRules } from './rules/css';
import { getModuleCssRules } from './rules/cssModules';
import fontsRule from './rules/fonts';
import jsRule from './rules/js';

const SensitivePath = require('case-sensitive-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

console.log('MODE IS DEVELOPMENT -', IS_DEV);

const localPaths = getPath(defaultRootPath);

export function getCommonConfig(paths: TWebpackPaths): Configuration {
  return {
    name: 'Clinet',
    target: 'web',
    entry: paths.entryClient,

    mode: !IS_DEV ? 'production' : 'development',
    devtool: !IS_DEV ? 'source-map' : 'inline-source-map',

    output: {
      path: localPaths.buildClient,
      filename: 'js/[name].[hash].js',
      publicPath: localPaths.publicClientPath,
    },
    resolve,
    module: {
      rules: [
        ...jsRule,
        getCssRules(paths),
        getModuleCssRules(paths),
        fontsRule,
      ],
    },
    optimization: {
      minimize: !IS_DEV,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: true,
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(paths.root, 'public/index.html'),
        minify: !IS_DEV,
      }),
      ...(IS_DEV ? [
        new webpack.HotModuleReplacementPlugin(),
        new SensitivePath(),
      ] : []),
      ...commonPlugins,
    ],
  };
}

export default getCommonConfig(localPaths);
