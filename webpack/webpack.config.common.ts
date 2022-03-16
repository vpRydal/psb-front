import * as path from 'path';
import {Configuration as WebpackConfiguration, ProgressPlugin} from 'webpack';
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server';

import PATH from "./path";
import cssRule from "./rules/css";
import cssModulesRule from "./rules/cssModules";
import jsRule from "./rules/js";
import fontsRule from "./rules/fonts";
import {IS_DEV} from "./constants";
import resolve from "./resolve";
import commonPlugins from "./common-plugins";

const TerserPlugin = require('terser-webpack-plugin');
const SensitivePath = require('case-sensitive-paths-webpack-plugin');
const webpack = require('webpack');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


export interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}


console.log('MODE IS DEVELOPMENT =', IS_DEV)

const config: Configuration = {
    target: 'web',
    entry: PATH.entryClient,

    mode: !IS_DEV ? 'production' : 'development',
    devtool: !IS_DEV ? 'source-map' : 'inline-source-map',

    output: {
        path: PATH.buildClient,
        filename: 'js/[name].[hash].js',
        publicPath: '/client/'
    },
    resolve: resolve,
    module: {
        rules: [
          ...jsRule,
            cssRule,
            cssModulesRule,
            fontsRule
        ]
    },
    optimization: {
        minimize: !IS_DEV,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    compress: true,
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            })
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: path.resolve(PATH.client, 'static'), to: IS_DEV ? 'assets' : path.resolve(PATH.root, 'public/assets')}
            ]
        }),
        ...(!IS_DEV ? [
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].chunk.css',
            })
        ]: []),
        ...(IS_DEV ? [
            new WatchMissingNodeModulesPlugin(path.resolve ('node_modules')),
            new webpack.HotModuleReplacementPlugin(),
            new SensitivePath(),
        ]: []),
      ...commonPlugins
    ]
}

export default config;
