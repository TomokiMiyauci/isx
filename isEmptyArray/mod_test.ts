import { isEmptyArray } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isEmptyArray",
  fn: () => {
    defineTable({
      "[]": true,
    }).forEach(([value, expected]) =>
      assertEquals(isEmptyArray(value as never), expected)
    );
  },
});
