import merge from 'webpack-merge';
import common, {Configuration} from './webpack.config.common'

const config: Configuration = {

};

export default merge(common, config);