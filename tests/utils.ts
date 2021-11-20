type ValueOf<T> = T[keyof T];

function makeDefineTable<T extends Record<PropertyKey, unknown>>(MAP: T) {
  return (map: { [k in keyof T]?: unknown }): [ValueOf<T>, boolean][] => {
    return Object.entries({ ...MAP }).map(([key, value]) => {
      const v = key in map ? (map as never)[key] : false;
      return [value, v];
    }) as [ValueOf<T>, boolean][];
  };
}

export { makeDefineTable };
