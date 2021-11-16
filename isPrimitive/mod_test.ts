import { isPrimitive } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

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
    }).forEach(([value, expected]) =>
      assertEquals(isPrimitive(value), expected)
    ),
});
