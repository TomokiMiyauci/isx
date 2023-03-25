import { isNullable } from "./is_nullable.ts";
import { defineTable } from "./_fixture.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isNullable",
  fn: () => {
    defineTable({
      null: true,
      undefined: true,
    }).forEach(([a, b]) => assertEquals(isNullable(a), b));
  },
});
