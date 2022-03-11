import merge from 'webpack-merge'
const LoadablePlugin = require('@loadable/webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
import common, {Configuration} from './webpack.config.common'
import PATH from "./path";

const config: Configuration = {
  plugins: [
    new LoadablePlugin({ writeToDisk: { filename: PATH.statsFileClient } }),
    new WebpackManifestPlugin({
      publicPath: '/client/'
    }),
    new CompressionPlugin(),
  ]
};

export default merge(common, config);
