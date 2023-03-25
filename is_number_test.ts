import { isNumber } from "./is_number.ts";
import { assertEquals } from "./_dev_deps.ts";
import { defineTable } from "./_fixture.ts";

Deno.test({
  name: "isNumber",
  fn: () =>
    defineTable({
      0: true,
      1: true,
      "-1": true,
    }).forEach(([a, b]) => assertEquals(isNumber(a), b)),
});
