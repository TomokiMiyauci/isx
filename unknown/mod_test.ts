import {
  isAsyncIterable,
  isBoolean,
  isDate,
  isDateFormat,
  isEmpty,
  isError,
  isEven,
  isFalse,
  isFunction,
  isHexColor,
  isIterable,
  isNegativeNumber,
  isNil,
  isNull,
  isNumber,
  isObject,
  isOdd,
  isPlainObject,
  isPositiveNumber,
  isPrimitive,
  isPromise,
  isString,
  isSymbol,
  isTrue,
  isUndefined,
  isValidDate,
} from "./mod.ts";
import { defineTable } from "../tests/data.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isString",
  fn: () =>
    defineTable({
      string: true,
      "": true,
    }).forEach(([a, b]) => assertEquals(isString(a), b)),
});

Deno.test({
  name: "isNumber",
  fn: () =>
    defineTable({
      0: true,
      1: true,
      "-1": true,
    }).forEach(([a, b]) => assertEquals(isNumber(a), b)),
});

Deno.test({
  name: "isNull",
  fn: () => {
    defineTable({
      null: true,
    }).forEach(([a, b]) => assertEquals(isNull(a), b));
  },
});

Deno.test({
  name: "isUndefined",
  fn: () => {
    defineTable({
      undefined: true,
    }).forEach(([a, b]) => assertEquals(isUndefined(a), b));
  },
});

Deno.test({
  name: "isFalse",
  fn: () =>
    defineTable({
      false: true,
    }).forEach(([value, expected]) => assertEquals(isFalse(value), expected)),
});

Deno.test({
  name: "isTrue",
  fn: () =>
    defineTable({
      true: true,
    }).forEach(([value, expected]) => assertEquals(isTrue(value), expected)),
});

Deno.test({
  name: "isNil",
  fn: () => {
    defineTable({
      null: true,
      undefined: true,
    }).forEach(([a, b]) => assertEquals(isNil(a), b));
  },
});

Deno.test({
  name: "isFunction",
  fn: () =>
    defineTable({
      "() => {}": true,
      function: true,
    }).forEach(([value, expected]) =>
      assertEquals(isFunction(value), expected)
    ),
});

Deno.test({
  name: "isBoolean",
  fn: () =>
    defineTable({
      false: true,
      true: true,
    }).forEach(([value, expected]) => assertEquals(isBoolean(value), expected)),
});

Deno.test({
  name: "isObject",
  fn: () => {
    defineTable({
      "[[]]": true,
      "[]": true,
      "date": true,
      "map": true,
      "set": true,
      "weakMap": true,
      "weakSet": true,
      "{{}}": true,
      "{}": true,
      error: true,
      promise: true,
    }).forEach(([value, expected]) => assertEquals(isObject(value), expected));
  },
});

Deno.test({
  name: "isPlainObject",
  fn: () => {
    defineTable({
      "{}": true,
      "{{}}": true,
    }).forEach(([value, expected]) =>
      assertEquals(isPlainObject(value), expected)
    );
  },
});

Deno.test({
  name: "isDate",
  fn: () => {
    defineTable({
      date: true,
    }).forEach(([value, expected]) => assertEquals(isDate(value), expected));
  },
});

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

    table.forEach(([value, result]) => assertEquals(isIterable(value), result));
  },
});

Deno.test({
  name: "isEmpty",
  fn: () => {
    const table: [
      ...Parameters<typeof isEmpty>,
      ReturnType<typeof isEmpty>,
    ][] = [
      [false, false],
      [{ a: "" }, false],
      [{ [Symbol.for("test")]: 1 }, false],
      [[1], false],
      [[, , 1], false],
      [new Array(1), false],
      [new Array(1).fill(1), false],
      ["a", false],
      [" ", false],
      [new Set([1]), false],
      [[], true],
      [new Array(0).fill(1), true],
      [new Array(0), true],
      ["", true],
      [{}, true],
      [new Set(), true],
      [new Map(), true],
      [new Map([[1, 2]]), false],
      [new Set(), true],
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

Deno.test({
  name: "isError",
  fn: () => {
    defineTable({
      error: true,
    }).forEach(([value, expected]) => assertEquals(isError(value), expected));
  },
});

Deno.test({
  name: "isPrimitive",
  fn: () =>
    defineTable({
      false: true,
      true: true,
      0: true,
      1: true,
      "-1": true,
      string: true,
      big1: true,
      symbol: true,
      null: true,
      undefined: true,
      "": true,
    }).forEach(([value, expected]) =>
      assertEquals(isPrimitive(value), expected)
    ),
});

Deno.test({
  name: "isPromise",
  fn: () => {
    defineTable({
      promise: true,
    }).forEach(([value, expected]) => assertEquals(isPromise(value), expected));
  },
});

Deno.test({
  name: "isSymbol",
  fn: () => {
    defineTable({
      symbol: true,
    }).forEach(([value, expected]) => assertEquals(isSymbol(value), expected));
  },
});

Deno.test({
  name: "isOdd",
  fn: () =>
    defineTable({
      1: true,
      "-1": true,
    }).forEach(([value, expected]) => assertEquals(isOdd(value), expected)),
});

Deno.test({
  name: "isEven",
  fn: () =>
    defineTable({
      0: true,
    }).forEach(([value, expected]) => assertEquals(isEven(value), expected)),
});

Deno.test({
  name: "isPositiveNumber",
  fn: () =>
    defineTable({
      1: true,
    }).forEach(([value, expected]) =>
      assertEquals(isPositiveNumber(value), expected)
    ),
});

Deno.test({
  name: "isNegativeNumber",
  fn: () =>
    defineTable({
      "-1": true,
    }).forEach(([value, expected]) =>
      assertEquals(isNegativeNumber(value), expected)
    ),
});

Deno.test({
  name: "isDateFormat",
  fn: () =>
    defineTable({}).forEach(([value, expected]) =>
      assertEquals(isDateFormat(value), expected)
    ),
});

Deno.test({
  name: "isHexColor",
  fn: () =>
    defineTable({}).forEach(([value, expected]) =>
      assertEquals(isHexColor(value), expected)
    ),
});

Deno.test({
  name: "isValidDate",
  fn: () =>
    defineTable({
      date: true,
    }).forEach(([value, expected]) =>
      assertEquals(isValidDate(value), expected)
    ),
});

Deno.test({
  name: "isAsyncIterable",
  fn: () => {
    async function* asyncGen() {}

    const table: [
      ...Parameters<typeof isAsyncIterable>,
      ReturnType<typeof isAsyncIterable>,
    ][] = [
      [false, false],
      [asyncGen, false],
      [{}, false],
      [[], false],
      ["", false],
      [{
        [Symbol.asyncIterator]: 1,
      }, false],
      [asyncGen(), true],
      [{
        async *[Symbol.asyncIterator]() {
          yield "hello";
          yield "async";
          yield "iteration!";
        },
      }, true],
    ];

    table.forEach(([value, result]) =>
      assertEquals(isAsyncIterable(value), result)
    );
  },
});
