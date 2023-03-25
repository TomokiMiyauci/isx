import { isIterable } from "./is_iterable.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isIterable",
  fn: () => {
    const table: [
      ...Parameters<typeof isIterable>,
      ReturnType<typeof isIterable>,
    ][] = [
      [false, false],
      [null, false],
      [undefined, false],
      [1, false],
      [1n, false],
      [Symbol.for("test"), false],
      [{}, false],
      [new Date(), false],
      [{ [Symbol.iterator]: [] }, false],
      [{ [Symbol.iterator]: () => {} }, true],
      ["", true],
      [[], true],
      [new Map(), true],
      [new Set(), true],
      [new Map(), true],
      [new Int8Array(), true],
      [new Int16Array(), true],
      [new WeakRef([]), false],
      [new WeakSet(), false],
      [new WeakMap(), false],
    ];

    table.forEach(([input, result]) => assertEquals(isIterable(input), result));
  },
});
