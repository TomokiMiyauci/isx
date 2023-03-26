import { isFunction } from "./is_function.ts";
import { defineTable } from "./_fixture.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isFunction",
  fn: () =>
    defineTable({
      "() => {}": true,
      function: true,
    }).forEach(([input, expected]) =>
      assertEquals(isFunction(input), expected)
    ),
});
