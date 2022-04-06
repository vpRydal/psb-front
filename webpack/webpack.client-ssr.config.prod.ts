import merge from 'webpack-merge'
import {Configuration} from "webpack";

import {getClientProdConfig} from "./webpack.client.config.prod";
import {defaultRootPath, getPath, TWebpackPaths} from "./path";
import * as path from "path";


const LoadablePlugin = require('@loadable/webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

export function getClientSsrProdConfig(paths: TWebpackPaths): Configuration {
  return merge(getClientProdConfig(paths), {
    output: {
      path: paths.buildClientSsr,
      publicPath: paths.publicClientPathSsr
    }
  })
}

export default getClientSsrProdConfig(getPath(defaultRootPath));

