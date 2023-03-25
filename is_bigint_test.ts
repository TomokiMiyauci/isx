import { isBigint } from "./is_bigint.ts";
import { defineTable } from "./_fixture.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isBigint",
  fn: () =>
    defineTable({
      big1: true,
    }).forEach(([a, b]) => assertEquals(isBigint(a), b)),
});
