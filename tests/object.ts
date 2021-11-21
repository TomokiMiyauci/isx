import { makeDefineTable } from "./utils.ts";

const OBJECT_MAP = {
  "{}": {},
  object: new Object({
    a: 1,
  }),
  "[]": [],
  array: [1],
  "map<{}>": new Map(),
  map: new Map([["a", 1]]),
  "set<[]>": new Set(),
};

const defineObjectTable = makeDefineTable(OBJECT_MAP);

export { defineObjectTable, OBJECT_MAP };
