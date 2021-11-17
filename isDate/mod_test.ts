import { isDate } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isDate",
  fn: () => {
    defineTable({
      date: true,
    }).forEach(([value, expected]) => assertEquals(isDate(value), expected));
  },
});
