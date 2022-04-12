import merge from 'webpack-merge'
import {Configuration} from "webpack";

import {getClientProdConfig} from "./webpack.client.config.prod";
import {defaultRootPath, getPath, TWebpackPaths} from "./path";


export function getClientSsrProdConfig(paths: TWebpackPaths): Configuration {
  return merge(getClientProdConfig(paths), {
    output: {
      path: paths.buildClientSsr,
      publicPath: paths.publicClientPathSsr
    }
  })
}

export default getClientSsrProdConfig(getPath(defaultRootPath));

