type ValueOf<T> = T[keyof T];

function makeDefineTable<T extends Record<PropertyKey, unknown>>(MAP: T) {
  return (map: { [k in keyof T]?: unknown }): [ValueOf<T>, boolean][] => {
    return Object.entries({ ...MAP }).map(([key, input]) => {
      const v = key in map ? (map as never)[key] : false;
      return [input, v];
    }) as [ValueOf<T>, boolean][];
  };
}

const MAP = {
  0: 0,
  1: 1,
  "-1": -1,
  string: "string",
  "": "",
  false: false,
  true: true,
  big1: 1n,
  symbol: Symbol(""),
  null: null,
  undefined: undefined,
  "{}": {},
  "{{}}": { nest: {} },
  "[]": [],
  "[[]]": [[]],
  map: new Map(),
  set: new Set(),
  weakMap: new WeakMap(),
  weakSet: new WeakSet(),
  "() => {}": () => {},
  promise: Promise.resolve(),
  function: new Function(),
  error: new Error(),
};

const defineTable = makeDefineTable(MAP);

export { defineTable };
