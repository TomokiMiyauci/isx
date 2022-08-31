import { assertEquals } from "./dev_deps.ts";
import {
  isHexColorFormat,
  isHostnameFormat,
  isRfc3339DateFormat,
  isRfc3339DateTimeFormat,
  isRfc3339TimeFormat,
} from "./strings.ts";

Deno.test({
  name: "isHexColorFormat",
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
      assertEquals(isHexColorFormat(value), result, value)
    );
  },
});

Deno.test({
  name: "isHostnameFormat",
  fn: () => {
    const table: [string, boolean][] = [
      ["", false],
      ["a.", false],
      ["a.".repeat(64), false],
      ["a.".repeat(63) + "." + "a".repeat(64), false],
      ["a..", false],
      [".", false],
      ["..", false],
      ["a.a.", false],
      ["a.a.a.", false],
      ["a.a.a.a.", false],

      ["a", true],
      ["a.a", true],
      ["a.a.a", true],
      ["a.a.a.a", true],
      ["a".repeat(63), true],
      ["a".repeat(63) + "." + "a".repeat(63), true],
    ];

    table.forEach(([value, result]) =>
      assertEquals(isHostnameFormat(value), result, value)
    );
  },
});

Deno.test({
  name: "isRfc3339DateFormat",
  fn: () => {
    const table: [string, boolean][] = [
      ["", false],
      ["0000-00-00", false],
      ["9999-99-99", false],
      ["9999-20-01", false],
      ["9999-20-00", false],
      ["9999-12-00", false],
      ["9999-12-32", false],
      ["9999-02-29", false],
      ["1000-11-31", false],
      ["1000-09-31", false],
      ["1000-06-31", false],
      ["1000-04-31", false],
      ["1000-02-31", false],
      [" 0000-01-01", false],
      ["0000-01-01 ", false],

      ["0000-01-01", true],
      ["0001-01-01", true],
      ["2000-01-01", true],
      ["2000-12-31", true],
      ["2000-11-30", true],
      ["9999-01-01", true],
      ["9999-02-28", true],
      ["2012-01-31", true],
      ["1000-03-31", true],
      ["1000-05-31", true],
      ["1000-07-31", true],
      ["1000-08-31", true],
      ["1000-10-31", true],
      ["1000-12-31", true],
    ];

    table.forEach(([value, result]) =>
      assertEquals(isRfc3339DateFormat(value), result, value)
    );
  },
});

Deno.test({
  name: "isRfc3339TimeFormat",
  fn: () => {
    const table: [string, boolean][] = [
      ["", false],
      ["30:00:00+00:00", false],
      ["00:60:00+00:00", false],
      ["24:00:00+00:00", false],
      ["23:00:60+00:00", false],
      ["00:00:00$00:00", false],
      ["00:00:00+20:00", false],
      ["00:00:00-20:00", false],
      ["23:59:59z", false],

      ["00:00:00+00:00", true],
      ["23:59:59+19:59", true],
      ["23:59:59Z", true],
    ];

    table.forEach(([value, result]) =>
      assertEquals(isRfc3339TimeFormat(value), result, value)
    );
  },
});

Deno.test({
  name: "isRfc3339TimeFormat",
  fn: () => {
    const table: [string, boolean][] = [
      ["", false],
      ["0000-00-00T00:00:00Z", false],
      ["0000-01-01z00:00:00Z", false],
      ["1000-01-01T00:00:00+20:00", false],
      [" 1000-01-01T00:00:00Z", false],

      ["1000-01-01T00:00:00Z", true],
      ["1000-01-01T00:00:00+00:00", true],
      ["9999-12-31T23:59:59+19:59", true],
    ];

    table.forEach(([value, result]) =>
      assertEquals(isRfc3339DateTimeFormat(value), result, value)
    );
  },
});