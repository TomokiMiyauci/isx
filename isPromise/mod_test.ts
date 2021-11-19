import { isPromise } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isPromise",
  fn: () => {
    defineTable({
      promise: true,
    }).forEach(([value, expected]) => assertEquals(isPromise(value), expected));
  },
});
