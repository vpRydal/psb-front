import path from "path";
import PATH from "./path";

export default {
  alias: {
    '@stores': path.resolve(PATH.client, '/data/stores'),
    '@client': path.resolve(PATH.client),
    '@components': path.resolve(PATH.client, '/components'),
    '@pages': path.resolve(PATH.client, '/pages'),
    '@utils': path.resolve(PATH.client, '/utils'),
    '@data': path.resolve(PATH.client, '/data'),
    '@services': path.resolve(PATH.client, '/services'),
    '@ui': path.resolve(PATH.client, '/ui'),
    '@config': path.resolve(PATH.client, '/config'),
    '@specs': path.resolve(PATH.client, '/specs'),
  },
  extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.png', '.jpg', '.gif', '.jpeg']
}
