import { isError } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isError",
  fn: () => {
    defineTable({
      error: true,
    }).forEach(([value, expected]) => assertEquals(isError(value), expected));
  },
});
