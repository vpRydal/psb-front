import { Configuration } from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import merge from 'webpack-merge';

import { defaultRootPath, getPath, TWebpackPaths } from './path';
import { getCommonConfig } from './webpack.client.config.common';

const LoadablePlugin = require('@loadable/webpack-plugin');

export function getClientProdConfig(paths: TWebpackPaths): Configuration {
  return merge(getCommonConfig(paths), {
    plugins: [
      new LoadablePlugin(),
      new WebpackManifestPlugin({}),
    ],
  });
}

export default getClientProdConfig(getPath(defaultRootPath));
