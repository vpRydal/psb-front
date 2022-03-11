import {IS_DEV} from "../constants";

export default {
  test: /\.(jsx|tsx|js|ts)$/,
  use: [
    {
      loader: 'babel-loader'
    }
  ],
  exclude: IS_DEV ? /node_modules/ : []
}
