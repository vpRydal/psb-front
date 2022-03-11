import path from "path";
import webpack, {ProgressPlugin} from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import {IS_DEV} from "./constants";
const resolve = require('resolve');
import PATH from "./path";

const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

export default [
  new ModuleNotFoundPlugin(path.resolve(__dirname, '.')),
  new CleanWebpackPlugin(),
  new ProgressPlugin(),
  new ForkTsCheckerWebpackPlugin(),
  new FriendlyErrorsPlugin({
    clearConsole: true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(IS_DEV ? 'development' : 'prod'),
      DEBUG: JSON.stringify(IS_DEV),
      BROWSER: JSON.stringify(true)
    },
    isProduction: JSON.stringify(!IS_DEV),
  }),
  new ForkTsCheckerWebpackPlugin({
    typescript: resolve.sync('typescript', {
      basedir: path.resolve (PATH.root, 'node_modules'),
    }),
    async: IS_DEV,
    checkSyntacticErrors: true,
    tsconfig: path.resolve (PATH.root, 'tsconfig.json'),
    silent: true,
    // The formatter is invoked directly in WebpackDevServerUtils during development
    formatter: !IS_DEV ? typescriptFormatter : undefined,
  }),

]
