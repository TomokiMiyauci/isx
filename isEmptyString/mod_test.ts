import { isEmptyString } from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isEmptyString",
  fn: () => {
    defineTable({
      "": true,
    }).forEach(([value, expected]) =>
      assertEquals(isEmptyString(value as never), expected)
    );
  },
});
