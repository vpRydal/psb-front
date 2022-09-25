import { merge } from 'lodash';

// eslint-disable-next-line import/no-mutable-exports
let config = {
  isServer: false,
};

export function set(chunk: typeof config) {
  config = merge(config, chunk);
}

export default config;
