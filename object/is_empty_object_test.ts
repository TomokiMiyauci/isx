import { isEmptyObject } from "./is_empty_object.ts";
import { defineObjectTable } from "../tests/object.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isEmptyObject",
  fn: () =>
    defineObjectTable({
      "[]": true,
      "{}": true,
      "map<{}>": true,
      "set<[]>": true,
    }).forEach(
      ([value, expected]) =>
        assertEquals(isEmptyObject(value), expected, String(value)),
    ),
});
