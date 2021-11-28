import { isEmpty } from "./is_empty.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isEmpty",
  fn: () => {
    const table: [...Parameters<typeof isEmpty>, ReturnType<typeof isEmpty>][] =
      [
        ["", true],
        [" ", false],
        [[], true],
        [{}, true],
        [{ a: 1 }, false],
        [{ [Symbol.for("test")]: 1 }, false],
        [[1], false],
        [new Map(), true],
        [new Map([[1, 2]]), false],
        [new Set(), true],
        [new Set([1]), false],
        [new Int8Array(), true],
        [new Int8Array(1), false],
        [new Uint8Array(), true],
        [new Uint8Array(1), false],
        [new Uint8ClampedArray(), true],
        [new Uint8ClampedArray(1), false],
        [new Int16Array(), true],
        [new Int16Array(1), false],
        [new Uint16Array(), true],
        [new Uint16Array(1), false],
        [new Int32Array(), true],
        [new Int32Array(1), false],
        [new Uint32Array(), true],
        [new Uint32Array(1), false],
        [new Float32Array(), true],
        [new Float32Array(1), false],
        [new Float64Array(), true],
        [new Float64Array(1), false],
      ];

    table.forEach(([value, result]) => assertEquals(isEmpty(value), result));
  },
});
