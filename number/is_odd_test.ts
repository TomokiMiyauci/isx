import { isOdd } from "./is_odd.ts";
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
