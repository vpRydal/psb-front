import { Configuration } from 'webpack';
import merge from 'webpack-merge';

import { defaultRootPath, getPath, TWebpackPaths } from './path';
import { getCssRules } from './rules/css';
import { getModuleCssRules } from './rules/cssModules';
import svg from './rules/svg';
import { getServerCommonConfig } from './webpack.server.config.common';

export function getClientAppComponentDevConfig(paths: TWebpackPaths): Configuration {
  return merge(getServerCommonConfig(paths), {
    name: 'Clent App component',
    entry: `${paths.client}/App.tsx`,
    output: {
      libraryTarget: 'assign',
      library: 'App',
    },
    module: {
      rules: [
        getCssRules(paths, true),
        getModuleCssRules(paths, true),
        svg,
      ],
    },
  });
}

export default getClientAppComponentDevConfig(getPath(defaultRootPath));
