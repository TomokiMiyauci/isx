import { isObject } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isObject",
  fn: () => {
    defineTable({
      "[[]]": true,
      "[]": true,
      "date": true,
      "map": true,
      "set": true,
      "weakMap": true,
      "weakSet": true,
      "{{}}": true,
      "{}": true,
      error: true,
      promise: true,
    }).forEach(([value, expected]) => assertEquals(isObject(value), expected));
  },
});
