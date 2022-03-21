// @ts-ignore
import nodeExternals from 'webpack-node-externals';
import {Configuration} from "webpack";

import PATH from "./path";
import resolve from "./resolve";
import commonPlugins from "./common-plugins";
import {IS_DEV} from "./constants";

const config: Configuration = {
    name: 'Server',
    target: 'node',
    entry: PATH.entryServer,
    mode: !IS_DEV ? 'production' : 'development',
    output: {
        filename: 'index.js',
        path: PATH.buildServer,
    },
    resolve: resolve,
    externals: [
        nodeExternals(),
        '@loadable/component'
    ],
    module: {
        rules: [
            { test: /\.(scss|css)|(module\.(scss|css)|(png|jpg|svg))/, loader: 'ignore-loader' },
            {
                test: /\.(tsx|ts)$/,
                use: 'babel-loader',
                exclude: IS_DEV ? /node_modules/ : []
            }
        ]
    },
    plugins: [
      ...commonPlugins
    ]
};

export default config;
