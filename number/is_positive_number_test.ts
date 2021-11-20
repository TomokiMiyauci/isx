import { isPositiveNumber } from "./is_positive_number.ts";
import { defineNumberTable } from "../tests/number.ts";
import { assertEquals } from "../dev_deps.ts";

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
