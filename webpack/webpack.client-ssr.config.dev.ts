import { Configuration } from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import merge from 'webpack-merge';

import { defaultRootPath, getPath, TWebpackPaths } from './path';
import { getCommonConfig } from './webpack.client.config.common';

const LoadablePlugin = require('@loadable/webpack-plugin');

const localPath = getPath(defaultRootPath);
export function getClientSsrDevConfig(paths: TWebpackPaths): Configuration {
  return merge(getCommonConfig(paths), {
    output: {
      publicPath: localPath.publicClientPathSsr,
      path: localPath.buildClientSsr,
    },
    plugins: [
      new LoadablePlugin(),
      new WebpackManifestPlugin({}),
    ],
  });
}

export default getClientSsrDevConfig(getPath(defaultRootPath));
