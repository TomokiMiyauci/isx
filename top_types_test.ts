import {
  isAsyncIterable,
  isBigint,
  isBoolean,
  isDate,
  isEmptyObject,
  isError,
  isFalse,
  isFalsy,
  isFunction,
  isIterable,
  isNonNullable,
  isNull,
  isNullable,
  isNumber,
  isObject,
  isPrimitive,
  isPromise,
  isRegExp,
  isString,
  isSymbol,
  isTrue,
  isTruthy,
  isUndefined,
} from "./top_types.ts";
import { defineTable } from "./tests/data.ts";
import { assertEquals } from "./dev_deps.ts";

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
  name: "isNullable",
  fn: () => {
    defineTable({
      null: true,
      undefined: true,
    }).forEach(([a, b]) => assertEquals(isNullable(a), b));
  },
});

Deno.test({
  name: "isNonNullable",
  fn: () => {
    defineTable({
      null: false,
      undefined: false,
      "() => {}": true,
      "-1": true,
      "0": true,
      "1": true,
      "": true,
      "[[]]": true,
      "[]": true,
      "big1": true,
      "date": true,
      "error": true,
      "false": true,
      "function": true,
      "map": true,
      "promise": true,
      "set": true,
      "string": true,
      "symbol": true,
      "true": true,
      "weakMap": true,
      "weakSet": true,
      "{{}}": true,
      "{}": true,
    }).forEach(([a, b]) => assertEquals(isNonNullable(a), b));
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
      ...Parameters<typeof isAsyncIterable>,
      ReturnType<typeof isAsyncIterable>,
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

Deno.test("isRegExp", () => {
  assertEquals(isRegExp(new RegExp("")), true);
  assertEquals(isRegExp({}), false);
});

Deno.test("isEmptyObject", () => {
  assertEquals(isEmptyObject({}), true);
  assertEquals(isEmptyObject(new Object()), true);
  assertEquals(isEmptyObject({ a: "b" }), false);
  assertEquals(isEmptyObject({ "": "" }), false);
  assertEquals(isEmptyObject({ [Symbol("")]: "" }), false);
  assertEquals(isEmptyObject([]), false);
});
