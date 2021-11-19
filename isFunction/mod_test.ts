import { isFunction } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isFunction",
  fn: () =>
    defineTable({
      "() => {}": true,
      function: true,
      promise: true,
    }).forEach(([value, expected]) =>
      assertEquals(isFunction(value), expected)
    ),
});
