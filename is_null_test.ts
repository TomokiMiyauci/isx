import { isNull } from "./is_null.ts";
import { defineTable } from "./_fixture.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isNull",
  fn: () => {
    defineTable({
      null: true,
    }).forEach(([a, b]) => assertEquals(isNull(a), b));
  },
});
