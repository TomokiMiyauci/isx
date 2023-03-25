import { isObject } from "./is_object.ts";
import { defineTable } from "./_fixture.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isObject",
  fn: () => {
    defineTable({
      "[[]]": true,
      "[]": true,
      "map": true,
      "set": true,
      "weakMap": true,
      "weakSet": true,
      "{{}}": true,
      "{}": true,
      error: true,
      promise: true,
    }).forEach(([input, expected]) => assertEquals(isObject(input), expected));
  },
});
