import { Configuration } from 'webpack';
import merge from 'webpack-merge';

import { defaultRootPath, getPath, TWebpackPaths } from './path';
import { getServerCommonConfig } from './webpack.server.config.common';

export function getClientAppComponentDevConfig(paths: TWebpackPaths): Configuration {
  return merge(getServerCommonConfig(paths), {
    name: 'Clent App component',
    entry: `${paths.client}/App.tsx`,
    output: {
      libraryTarget: 'assign',
      library: 'App',
    },
  });
}

export default getClientAppComponentDevConfig(getPath(defaultRootPath));
