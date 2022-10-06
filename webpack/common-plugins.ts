import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack, { ProgressPlugin } from 'webpack';

import { IS_DEV } from './constants';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');

export default [
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].chunk.css',
  }),
  new ModuleNotFoundPlugin(path.resolve(__dirname, '.')),
  new CleanWebpackPlugin(),
  new ProgressPlugin({}),
  new FriendlyErrorsPlugin({
    clearConsole: true,
  }),
  new ForkTsCheckerWebpackPlugin({
    async: IS_DEV,
  }),
  new ESLintWebpackPlugin({
    threads: IS_DEV,
    emitWarning: false,
    failOnError: !IS_DEV,
  }),
];
