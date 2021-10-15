import {Configuration} from './webpack.config.common'
import path from "path";
const nodeExternals = require('webpack-node-externals')
// @ts-ignore
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import {CleanWebpackPlugin} from "clean-webpack-plugin";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config: Configuration = {
    target: 'node',
    entry: {
        main: './server',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/server'),
    },
    resolve: {
        alias: {
        },
        extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.png', '.jpg', '.gif', '.jpeg']
    },
    module: {
        rules: [
            {
                test: /.+\.(scss|css)$/, loader: 'ignore-loader'
            },

            {
                test: /\.(jsx|tsx|js|ts)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images'
                        }
                    }
                ]
            },
        ],
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
        ],
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};

export default config;