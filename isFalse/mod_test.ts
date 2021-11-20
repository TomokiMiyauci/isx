import { isFalse } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isFalse",
  fn: () =>
    defineTable({
      false: true,
    }).forEach(([value, expected]) => assertEquals(isFalse(value), expected)),
});
