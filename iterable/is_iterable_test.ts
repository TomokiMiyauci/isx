import { isIterable } from "./is_iterable.ts";
import { assertEquals } from "../dev_deps.ts";

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

    table.forEach(([value, result]) => assertEquals(isIterable(value), result));
  },
});
