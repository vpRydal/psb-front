import merge from 'webpack-merge'
const LoadablePlugin = require('@loadable/webpack-plugin')

import common, {Configuration} from './webpack.config.common'
import PATH from "./path";

const config: Configuration = {
  plugins: [
    new LoadablePlugin({ writeToDisk: { filename: PATH.statsFileClient } }),
  ]
};

export default merge(common, config);
