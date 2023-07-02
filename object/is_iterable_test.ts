import { isIterable } from "./is_iterable.ts";
import { assertEquals } from "../_dev_deps.ts";

Deno.test({
  name: "isIterable",
  fn: () => {
    const table: [
      ...Parameters<typeof isIterable>,
      ReturnType<typeof isIterable>,
    ][] = [
      [{}, false],
      [{ [Symbol.iterator]: [] }, false],
      [{ [Symbol.iterator]: () => {} }, true],
      ["", true],
      [[], true],
      [new Map(), true],
      [new Set(), true],
      [new Map(), true],
      [new Int8Array(), true],
      [new Int16Array(), true],
    ];

    table.forEach(([input, result]) => assertEquals(isIterable(input), result));
  },
});
