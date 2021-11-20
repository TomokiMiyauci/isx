import { isEven } from "./is_even.ts";
import { defineNumberTable } from "../tests/number.ts";
import { assertEquals } from "../dev_deps.ts";

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
