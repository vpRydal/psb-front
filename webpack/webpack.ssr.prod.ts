import commonConfig, {Configuration} from './webpack.config.common'
// @ts-ignore
import nodeExternals from 'webpack-node-externals';
// @ts-ignore
import path from "path";
import merge from 'webpack-merge';
const packageJson = require('../package.json');


const config: Configuration = {
    name: 'Server',
    target: 'node',
    devtool: 'source-map',
    entry: path.resolve(__dirname, '../server'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../build/server'),
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [
        nodeExternals(),
        '@loadable/component',
        ...Object.keys(packageJson.peerDependencies),
    ]
};

export default merge(commonConfig, config);