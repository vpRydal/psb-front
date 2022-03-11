import path from "path";
import PATH from "./path";

console.log(path.resolve(PATH.client, 'stores'))
export default {
  alias: {
    '@store': path.resolve(PATH.client, 'stores'),
    '@client': path.resolve(PATH.client)
  },
  extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.png', '.jpg', '.gif', '.jpeg']
}
