import merge from 'webpack-merge';
import common, {Configuration} from './webpack.config.common';
// @ts-ignore
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from "path";
import PATH from "./path";

const config: Configuration = {
    devServer: {
        hot: true,
        historyApiFallback: {
            disableDotRule: true
        },
        watchOptions: {aggregateTimeout: 300, poll: 1000},
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: true,
            warnings: true,
            publicPath: false
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(PATH.root, `public/index.html`)
        }),
    ]
};

export default merge(common, config);
