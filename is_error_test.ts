import { isError } from "./is_error.ts";
import { defineTable } from "./_fixture.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isError",
  fn: () => {
    defineTable({
      error: true,
    }).forEach(([input, expected]) => assertEquals(isError(input), expected));
  },
});
