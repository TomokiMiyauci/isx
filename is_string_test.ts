import { isString } from "./is_string.ts";
import { assertEquals } from "./_dev_deps.ts";
import { defineTable } from "./_fixture.ts";

Deno.test({
  name: "isString",
  fn: () =>
    defineTable({
      string: true,
      "": true,
    }).forEach(([a, b]) => assertEquals(isString(a), b)),
});
