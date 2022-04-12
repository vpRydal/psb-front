import merge from 'webpack-merge'
import {defaultRootPath, getPath, TWebpackPaths} from "./path";
import {Configuration} from "webpack";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";

import {getCommonConfig} from "./webpack.client.config.common";

const LoadablePlugin = require('@loadable/webpack-plugin')


export function getClientDevConfig(paths: TWebpackPaths): Configuration {
  return merge(getCommonConfig(paths), {
      plugins: [
        new LoadablePlugin(),
        new WebpackManifestPlugin({})
      ]
    }
  )}

export default getClientDevConfig(getPath(defaultRootPath));

