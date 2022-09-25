import { Configuration } from 'webpack';
import merge from 'webpack-merge';

import { defaultRootPath, getPath, TWebpackPaths } from './path';
import { getClientProdConfig } from './webpack.client.config.prod';

export function getClientSsrProdConfig(paths: TWebpackPaths): Configuration {
  return merge(getClientProdConfig(paths), {
    output: {
      path: paths.buildClientSsr,
      publicPath: paths.publicClientPathSsr,
    },
  });
}

export default getClientSsrProdConfig(getPath(defaultRootPath));
