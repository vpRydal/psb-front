import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {Configuration} from 'webpack';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'

import {defaultRootPath, getPath, TWebpackPaths} from "./path";
import {getCssRules} from "./rules/css";
import jsRule from "./rules/js";
import fontsRule from "./rules/fonts";
import {IS_DEV} from "./constants";
import resolve from "./resolve";
import commonPlugins from "./common-plugins";
import {getModuleCssRules} from "./rules/cssModules";

const TerserPlugin = require('terser-webpack-plugin');
const SensitivePath = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

console.log('MODE IS DEVELOPMENT -', IS_DEV)

const localPaths = getPath(defaultRootPath);

export function getCommonConfig(paths: TWebpackPaths): Configuration {
    return {
        name: 'Clinet',
        target: 'web',
        entry: paths.entryClient,

        mode: !IS_DEV ? 'production' : 'development',
        devtool: !IS_DEV ? 'source-map' : 'inline-source-map',

        output: {
            path: localPaths.buildClient,
            filename: 'js/[name].[hash].js',
            publicPath: localPaths.publicClientPath
        },
        resolve: resolve,
        module: {
            rules: [
                ...jsRule,
                getCssRules(paths),
                getModuleCssRules(paths),
                fontsRule
            ]
        },
        optimization: {
            minimize: !IS_DEV,
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                        compress: true,
                        format: {
                            comments: false,
                        },
                    },
                    extractComments: false,
                }),
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(paths.root, `public/index.html`)
            }),
            ...(IS_DEV ? [
                new WatchMissingNodeModulesPlugin(path.resolve ('node_modules')),
                new webpack.HotModuleReplacementPlugin(),
                new SensitivePath(),
            ]: []),
            ...commonPlugins
        ]
    }
}

export default getCommonConfig(localPaths);
