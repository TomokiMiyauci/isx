import {
  isAsyncGenerator,
  isAsyncIterable,
  isBigint,
  isBoolean,
  isDate,
  isEmpty,
  isError,
  isFalse,
  isFalsy,
  isFunction,
  isIterable,
  isNil,
  isNull,
  isNumber,
  isObject,
  isPlainObject,
  isPrimitive,
  isPromise,
  isString,
  isSymbol,
  isTrue,
  isTruthy,
  isUndefined,
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
  name: "isBigint",
  fn: () =>
    defineTable({
      big1: true,
    }).forEach(([a, b]) => assertEquals(isBigint(a), b)),
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
  name: "isAsyncIterable",
  fn: () => {
    async function* asyncGen() {}

    const table: [
      ...Parameters<typeof isAsyncGenerator>,
      ReturnType<typeof isAsyncGenerator>,
    ][] = [
      [false, false],
      [{}, false],
      [[], false],
      ["", false],
      [{
        [Symbol.asyncIterator]: 1,
      }, false],
      [{
        async *[Symbol.asyncIterator]() {},
      }, true],
      [{
        async [Symbol.asyncIterator]() {},
        next: () => {},
        return: () => {},
        throw: () => {},
      }, true],
      [asyncGen(), true],
    ];

    table.forEach(([value, result]) =>
      assertEquals(isAsyncIterable(value), result)
    );
  },
});

Deno.test({
  name: "isAsyncGenerator",
  fn: () => {
    async function* asyncGen() {}

    const table: [
      ...Parameters<typeof isAsyncGenerator>,
      ReturnType<typeof isAsyncGenerator>,
    ][] = [
      [false, false],
      [{}, false],
      [[], false],
      ["", false],
      [{
        async *[Symbol.asyncIterator]() {},
      }, false],
      [{
        [Symbol.asyncIterator]: 1,
      }, false],
      [{
        async [Symbol.asyncIterator]() {},
        next: () => {},
        return: () => {},
        throw: undefined,
      }, false],
      [{
        async [Symbol.asyncIterator]() {},
        next: () => {},
        return: () => {},
        throw: () => {},
      }, true],
      [asyncGen(), true],
    ];

    table.forEach(([value, result]) =>
      assertEquals(isAsyncGenerator(value), result)
    );
  },
});

Deno.test("isFalsy", () => {
  assertEquals(isFalsy(""), true);
  assertEquals(isFalsy(0), true);
  assertEquals(isFalsy(-0), true);
  assertEquals(isFalsy(0n), true);
  assertEquals(isFalsy(-0n), true);
  assertEquals(isFalsy(null), true);
  assertEquals(isFalsy(undefined), true);
  assertEquals(isFalsy(false), true);

  assertEquals(isFalsy(true), false);
  assertEquals(isFalsy(1), false);
});

Deno.test("isTruthy", () => {
  assertEquals(isTruthy(" "), true);
  assertEquals(isTruthy(1), true);
  assertEquals(isTruthy(Symbol("")), true);
  assertEquals(isTruthy(1n), true);
  assertEquals(isTruthy(true), true);
  assertEquals(isTruthy({}), true);

  assertEquals(isTruthy(0), false);
  assertEquals(isTruthy(-0), false);
  assertEquals(isTruthy(0n), false);
  assertEquals(isTruthy(""), false);
  assertEquals(isTruthy(null), false);
  assertEquals(isTruthy(undefined), false);
  assertEquals(isTruthy(false), false);
});
