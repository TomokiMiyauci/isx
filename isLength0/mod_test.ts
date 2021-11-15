import { isLength0 } from "./mod.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isLength0",
  fn: () => {
    const table: [{ length: number }, boolean][] = [
      ["", true],
      [" ", false],
      [{ length: 1 }, false],
      [{ length: 0 }, true],
      [[], true],
      [[1], false],
    ];

    table.forEach(([value, expected]) => {
      assertEquals(isLength0(value), expected);
    });
  },
});
