export type Dictionary<Key extends string | number, Value> = {
  [key in Key]: Value;
};
