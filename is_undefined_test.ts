import { isUndefined } from "./is_undefined.ts";
import { defineTable } from "./_fixture.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isUndefined",
  fn: () => {
    defineTable({
      undefined: true,
    }).forEach(([a, b]) => assertEquals(isUndefined(a), b));
  },
});
