import { makeDefineTable } from "../tests/utils.ts";

const NUMBER_MAP = {
  0: 0,
  "-0": -0,
  1: 1,
  "-1": -1,
  Infinity: Infinity,
  "-Infinity": -Infinity,
  NaN: NaN,
  MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  MAX_VALUE: Number.MAX_VALUE,
  MIN_VALUE: Number.MIN_VALUE,
  MIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  EPSILON: Number.EPSILON,
};

const defineNumberTable = makeDefineTable(NUMBER_MAP);

export { defineNumberTable };
