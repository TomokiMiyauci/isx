import { assertEquals } from "../dev_deps.ts";
import { isDateString } from "./is_date_string.ts";
import { defineStringTable } from "../tests/string.ts";

Deno.test({
  name: "isDateString",
  fn: () => {
    defineStringTable({
      "Date string": true,
      "ISO 8601": true,
      "YYYYMMDD hhmmss": true,
      "YYYYMMDD": true,
    }).forEach(([key, value]) => assertEquals(isDateString(key), value, key));
  },
});
