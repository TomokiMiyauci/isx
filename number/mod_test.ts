import { isEven, isNegativeNumber, isOdd, isPositiveNumber } from "./mod.ts";
import { defineNumberTable } from "../tests/number.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isOdd",
  fn: () =>
    defineNumberTable({
      "-1": true,
      1: true,
      "MAX_SAFE_INTEGER": true,
      "MIN_SAFE_INTEGER": true,
    }).forEach(
      ([value, expected]) => assertEquals(isOdd(value), expected),
    ),
});

Deno.test({
  name: "isEven",
  fn: () =>
    defineNumberTable({
      0: true,
      "-0": true,
      "MAX_VALUE": true,
    }).forEach(
      ([value, expected]) =>
        assertEquals(isEven(value), expected, String(value)),
    ),
});

Deno.test({
  name: "isPositiveNumber",
  fn: () =>
    defineNumberTable({
      1: true,
      MAX_VALUE: true,
      MIN_VALUE: true,
      MAX_SAFE_INTEGER: true,
      EPSILON: true,
    }).forEach(
      ([value, expected]) =>
        assertEquals(isPositiveNumber(value), expected, String(value)),
    ),
});

Deno.test({
  name: "isNegativeNumber",
  fn: () =>
    defineNumberTable({
      "-1": true,
      MIN_SAFE_INTEGER: true,
    }).forEach(
      ([value, expected]) => assertEquals(isNegativeNumber(value), expected),
    ),
});
