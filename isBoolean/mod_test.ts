import { isBoolean } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isBoolean",
  fn: () =>
    defineTable({
      false: true,
      true: true,
    }).forEach(([value, expected]) => assertEquals(isBoolean(value), expected)),
});
