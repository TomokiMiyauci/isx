import { isTrue } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isTrue",
  fn: () =>
    defineTable({
      true: true,
    }).forEach(([value, expected]) => assertEquals(isTrue(value), expected)),
});
