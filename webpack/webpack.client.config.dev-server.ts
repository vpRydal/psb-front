import express from 'express';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import merge from 'webpack-merge';

import PATH from './path';
import common from './webpack.client.config.common';

const config: WebpackConfiguration & {
  devServer: DevServerConfiguration
} = {
  output: {
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    setupMiddlewares(middlewares, devServer) {
      devServer.app?.use('/assets', express.static('public/assets'));
      return middlewares;
    },
    port: 3000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PATH.root, 'public/index.html'),
    }),
  ],
};

export default merge(common, config);
