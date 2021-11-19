import { isNil } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isNil",
  fn: () => {
    defineTable({
      null: true,
      undefined: true,
    }).forEach(([a, b]) => assertEquals(isNil(a), b));
  },
});
