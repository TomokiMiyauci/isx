import { isValidDate } from "./mod.ts";
import { defineDateTable } from "../tests/date.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isValidDate",
  fn: () => {
    defineDateTable({
      date: true,
    }).forEach(([value, expected]) =>
      assertEquals(isValidDate(value), expected)
    );
  },
});
