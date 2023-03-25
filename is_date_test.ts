import { isDate } from "./is_date.ts";
import { defineTable } from "./_fixture.ts";
import { assert, assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isDate",
  fn: () => {
    defineTable({}).forEach(([input, expected]) =>
      assertEquals(isDate(input), expected)
    );

    assert(isDate(new Date("2000/1/1")));
  },
});
