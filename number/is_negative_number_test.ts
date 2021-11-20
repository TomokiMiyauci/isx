import { isNegativeNumber } from "./is_negative_number.ts";
import { defineNumberTable } from "../tests/number.ts";
import { assertEquals } from "../dev_deps.ts";

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
