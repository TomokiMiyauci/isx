import { DATE_MAP } from "./date.ts";
import { makeDefineTable } from "./utils.ts";

const { date } = DATE_MAP;

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
  date,
  error: new Error(),
};

const defineTable = makeDefineTable(MAP);

export { defineTable };
