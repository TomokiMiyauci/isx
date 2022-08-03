import { assertEquals } from "../dev_deps.ts";
import { isDateFormat, isHexColor } from "./mod.ts";
import { defineStringTable } from "../tests/string.ts";

Deno.test({
  name: "isDateFormat",
  fn: () => {
    defineStringTable({
      "Date string": true,
      "ISO 8601": true,
      "YYYYMMDD hhmmss": true,
      "YYYYMMDD": true,
    }).forEach(([key, value]) => assertEquals(isDateFormat(key), value, key));
  },
});

Deno.test({
  name: "isHexColor",
  fn: () => {
    const table: [string, boolean][] = [
      ["#000000", true],
      ["#123abc", true],
      ["#ABC123", true],
      ["#FFF", true],
      ["#00F", true],
      ["#ecECec", true],
      ["#000", true],
      ["#ecec", false],
      ["#", false],
      ["#f", false],
      ["#ff", false],
      ["#ffff", false],
      ["#fffff", false],
      ["#ffffff", true],
      ["#fffffff", false],
      ["#00", false],
      ["000", false],
      ["#GGG", false],
      ["ececec", false],
      ["#gggggg", false],
      ["#123ffg", false],
      ["#0000000", false],
    ];

    table.forEach(([value, result]) =>
      assertEquals(isHexColor(value), result, value)
    );
  },
});
