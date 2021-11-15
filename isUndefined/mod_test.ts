import { isUndefined } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isUndefined",
  fn: () => {
    defineTable({
      undefined: true,
    }).forEach(([a, b]) => assertEquals(isUndefined(a), b));
  },
});
