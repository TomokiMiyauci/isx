import { isBoolean } from "./is_boolean.ts";
import { defineTable } from "./_fixture.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isBoolean",
  fn: () =>
    defineTable({
      false: true,
      true: true,
    }).forEach(([input, expected]) => assertEquals(isBoolean(input), expected)),
});
