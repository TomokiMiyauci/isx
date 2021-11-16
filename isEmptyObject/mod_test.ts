import { isEmptyObject } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isEmptyObject",
  fn: () => {
    defineTable({
      "{}": true,
    }).forEach(([value, expected]) =>
      assertEquals(isEmptyObject(value as never), expected)
    );
  },
});
