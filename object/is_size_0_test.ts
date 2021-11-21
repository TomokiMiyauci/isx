import { hasSize, isSize0 } from "./is_size_0.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isSize0",
  fn: () => {
    assertEquals(isSize0(new Map()), true);
    assertEquals(isSize0(new Set()), true);
    assertEquals(isSize0(new Set([[1, 2]])), false);
    assertEquals(isSize0(new Map([[1, 2]])), false);
    assertEquals(isSize0({ size: 0 }), true);
    assertEquals(isSize0({ size: "0" }), false);
    assertEquals(isSize0({ size: 1 }), false);
  },
});

Deno.test({
  name: "hasSize",
  fn: () => {
    assertEquals(hasSize({ size: 1 }), true);
    assertEquals(hasSize(new Map()), true);
    assertEquals(hasSize(new Map([["a", 1]])), true);
    assertEquals(hasSize([]), false);
  },
});
