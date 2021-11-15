import { isString } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isString",
  fn: () =>
    defineTable({
      string: true,
      "": true,
    }).forEach(([a, b]) => assertEquals(isString(a), b)),
});
