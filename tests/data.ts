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
  date: new Date("2000/1/1"),
  error: new Error(),
};

const defineTable = (map: { [k in keyof typeof MAP]?: unknown }) => {
  return Object.entries({ ...MAP }).map(([key, value]) => {
    const v = key in map ? (map as never)[key] : false;
    return [value, v];
  });
};

export { defineTable };
