import webpack, { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';

import commonPlugins from './common-plugins';
import { IS_DEV } from './constants';
import { defaultRootPath, getPath, TWebpackPaths } from './path';
import resolve from './resolve';

const localPaths = getPath(defaultRootPath);

export function getServerCommonConfig(paths: TWebpackPaths): Configuration {
  return {
    name: 'Server',
    target: 'node',
    entry: paths.entryServer,
    mode: !IS_DEV ? 'production' : 'development',
    output: {
      filename: 'index.js',
      path: localPaths.buildServer,
    },
    resolve,
    externals: [
      nodeExternals(),
      '@loadable/component',
    ],
    module: {
      rules: [
        { test: /(png|jpg|svg)/, loader: 'ignore-loader' },
        { test: /\.(scss|css)/, loader: 'ignore-loader' },
        {
          test: /\.(tsx|ts)$/,
          use: 'babel-loader',
          exclude: IS_DEV ? /node_modules/ : [],
        },
      ],
    },
    plugins: [
      ...commonPlugins,
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  };
}

export default getServerCommonConfig(getPath(defaultRootPath));
