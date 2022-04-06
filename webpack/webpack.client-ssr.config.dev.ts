import merge from 'webpack-merge'
import {Configuration} from "webpack";
import * as path from "path";

import {getCommonConfig} from "./webpack.client.config.common";
import {defaultRootPath, getPath, TWebpackPaths} from "./path";

const LoadablePlugin = require('@loadable/webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

const localPath = getPath(defaultRootPath);
export function getClientSsrDevConfig(paths: TWebpackPaths): Configuration {
  return merge(getCommonConfig(paths), {
    output: {
      publicPath: localPath.publicClientPathSsr,
      path: localPath.buildClientSsr
    },
      plugins: [
        new LoadablePlugin(),
        new WebpackManifestPlugin()
      ]
    }
  )}

export default getClientSsrDevConfig(getPath(defaultRootPath));

