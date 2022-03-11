import {IS_DEV} from "../constants";

export default [
  {
    test: /\.(js|jsx)$/,
    use: [
      {
        loader: 'babel-loader'
      },
    ],
    exclude: IS_DEV ? /node_modules/ : []
  },
  {
    test: /\.(tsx|ts)$/,
    use: [
      {
        options: {
          forceIsolatedModules: true,
          useCache: true,
          transpileOnly: true,
        },
        loader: 'awesome-typescript-loader'
      }
    ],
    exclude: IS_DEV ? /node_modules/ : []
  }
]
