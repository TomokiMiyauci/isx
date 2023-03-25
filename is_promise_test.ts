import { isPromise } from "./is_promise.ts";
import { defineTable } from "./_fixture.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isPromise",
  fn: () => {
    defineTable({
      promise: true,
    }).forEach(([input, expected]) => assertEquals(isPromise(input), expected));
  },
});
