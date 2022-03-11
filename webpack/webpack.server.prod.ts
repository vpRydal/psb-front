import commonConfig, {Configuration} from './webpack.config.common'
// @ts-ignore
import nodeExternals from 'webpack-node-externals';
// @ts-ignore
import path from "path";
import PATH from "./path";
import jsRule from "./rules/js";
import resolve from "./resolve";
import commonPlugins from "./common-plugins";

const config: Configuration = {
    name: 'Server',
    target: 'node',
    entry: PATH.entryServer,
    output: {
        filename: 'index.js',
        path: PATH.buildServer,
    },
    resolve: resolve,
    optimization: commonConfig.optimization,
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [
        nodeExternals(),
        '@loadable/component'
    ],
    module: {
        rules: [
            { test: /\.(scss|css)|(module\.(scss|css)|(png|jpg|svg))/, loader: 'ignore-loader' },
            jsRule,
        ]
    },
    plugins: [
      ...commonPlugins
    ]
};

export default config;
