import { isSymbol } from "./is_symbol.ts";
import { defineTable } from "./_fixture.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isSymbol",
  fn: () => {
    defineTable({
      symbol: true,
    }).forEach(([input, expected]) => assertEquals(isSymbol(input), expected));
  },
});
