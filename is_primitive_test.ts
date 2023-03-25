import { isPrimitive } from "./is_primitive.ts";
import { defineTable } from "./_fixture.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isPrimitive",
  fn: () =>
    defineTable({
      false: true,
      true: true,
      0: true,
      1: true,
      "-1": true,
      string: true,
      big1: true,
      symbol: true,
      null: true,
      undefined: true,
      "": true,
    }).forEach(([input, expected]) =>
      assertEquals(isPrimitive(input), expected)
    ),
});
