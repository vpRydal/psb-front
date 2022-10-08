import { merge } from 'lodash';

// eslint-disable-next-line import/no-mutable-exports
let config = {
  isServer: false,
  apiURl: 'http://1052485-cd87141.tmweb.ru/backend/',
};

export function set(chunk: typeof config) {
  config = merge(config, chunk);
}

export default config;
