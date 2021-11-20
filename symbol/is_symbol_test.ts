import { isSymbol } from "./is_symbol.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isSymbol",
  fn: () => {
    defineTable({
      symbol: true,
    }).forEach(([value, expected]) => assertEquals(isSymbol(value), expected));
  },
});
