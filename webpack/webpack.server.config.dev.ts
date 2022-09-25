import merge from 'webpack-merge';

import webpackOptionServerCommon from './webpack.server.config.common';

export default merge(webpackOptionServerCommon, {
  plugins: [
  ],
});
