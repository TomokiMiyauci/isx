import { isNonNullable } from "./is_non_nullable.ts";
import { defineTable } from "./_fixture.ts";
import { assertEquals, assertType, IsExact } from "./_dev_deps.ts";

Deno.test({
  name: "isNonNullable",
  fn: () => {
    defineTable({
      "() => {}": true,
      "-1": true,
      "0": true,
      1: true,
      "": true,
      "[[]]": true,
      "[]": true,
      "big1": true,
      "error": true,
      "false": true,
      "function": true,
      "map": true,
      "promise": true,
      "set": true,
      "string": true,
      "true": true,
      "weakMap": true,
      "weakSet": true,
      "{{}}": true,
      "{}": true,
      symbol: true,
    }).forEach(([a, b]) => assertEquals(isNonNullable(a), b));
  },
});

Deno.test("should infer {}", () => {
  const input: unknown = {};

  if (isNonNullable(input)) {
    assertType<IsExact<typeof input, {}>>(true);
  }
});

Deno.test("should infer non-nullable", () => {
  const input: null | undefined | string = "";

  if (isNonNullable(input)) {
    assertType<IsExact<typeof input, string>>(true);
  }
});
