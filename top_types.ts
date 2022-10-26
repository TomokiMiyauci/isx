/** Whether the value is `string` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isString } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isString('hello world'), true)
 * assertEquals(isString(1000), false)
 * ```
 */
export function isString(value: unknown): value is string {
  return typeof value === "string";
}

/** Whether the value is `number` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isNumber } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isNumber(1000), true)
 * assertEquals(isNumber('hello world'), false)
 * ```
 */
export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

/** Whether the value is `bigint` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isBigint } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isBigint(1000n), true)
 * assertEquals(isBigint(undefined), false)
 * ```
 */
export function isBigint(value: unknown): value is bigint {
  return typeof value === "bigint";
}

/** Whether the value is `null` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isNull } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isNull(null), true)
 * assertEquals(isNull(undefined), false)
 * ```
 */
export function isNull(value: unknown): value is null {
  return value === null;
}

/** Whether the value is `undefined` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isUndefined } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isUndefined(undefined), true)
 * assertEquals(isUndefined(null), false)
 * ```
 */
export function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined";
}

/** Whether the value is `true` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isTrue } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isTrue(true), true)
 * assertEquals(isTrue(false), false)
 * ```
 */
export function isTrue(value: unknown): value is true {
  return value === true;
}

/** Whether the value is `false` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isFalse } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isFalse(false), true)
 * assertEquals(isFalse(true), false)
 * ```
 */
export function isFalse(value: unknown): value is false {
  return value === false;
}

/** Whether the value is `boolean` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isBoolean } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isBoolean(true), true)
 * assertEquals(isBoolean(null), false)
 * ```
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

/** Whether the value is `null` or `undefined` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isNullable } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isNullable(null), true)
 * assertEquals(isNullable(undefined), true)
 * assertEquals(isNullable({}), false)
 * ```
 */
export function isNullable(value: unknown): value is null | undefined {
  return isNull(value) || isUndefined(value);
}

/** Whether the value is non-nullable or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isNonNullable } from "https://deno.land/x/isx@$VERSION/mod.ts";
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
 * assertEquals(isNonNullable({}), true);
 * assertEquals(isNonNullable(null), false);
 * assertEquals(isNonNullable(undefined), false);
 * ```
 */
export function isNonNullable(value: unknown): value is {} {
  return !isNullable(value);
}

/** Whether the value is `Function` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isFunction } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isFunction(() => {}), true)
 * assertEquals(isFunction({}), false)
 * ```
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === "function";
}

/** Whether the value is `object` or not.
 * @param value - Any value.
 *
 * ```ts
 * import { isObject } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isObject({}), true)
 * assertEquals(isObject(null), false)
 * ```
 */
export function isObject(value: unknown): value is object {
  return typeof value === "object" && !isNull(value);
}

/** Whether the value is `symbol` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isSymbol } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isSymbol(Symbol("symbol")), true)
 * assertEquals(isSymbol(null), false)
 * ```
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}

/** Whether the value is `Date` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isDate } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isDate(new Date()), true)
 * assertEquals(isDate({}), false)
 * ```
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

/** Whether the value is `Iterable` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isIterable } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isIterable(""), true)
 * assertEquals(isIterable({}), false)
 * ```
 */
export function isIterable<T>(value: unknown): value is Iterable<T> {
  return isFunction(Object(value)[Symbol.iterator]);
}

/** Whether the value is `Error` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isError } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isError(Error()), true)
 * assertEquals(isError(new SyntaxError()), true)
 * assertEquals(isError(new Date()), false);
 * ```
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

/** Types for Primitive value. */
export type Primitive =
  | number
  | string
  | boolean
  | bigint
  | undefined
  | null
  | symbol;

/** Whether the value is {@link Primitive} or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isPrimitive } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isPrimitive(true), true)
 * assertEquals(isPrimitive(() => {}), false)
 * ```
 */
export function isPrimitive(value: unknown): value is Primitive {
  return !isObject(value) && !isFunction(value);
}

/** Whether the value is `Promise` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isPromise } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isPromise(Promise.resolve()), true)
 * assertEquals(isPromise({}), false)
 * ```
 */
export function isPromise<T>(value: unknown): value is Promise<T> {
  return value instanceof Promise;
}

/** Whether the value is `AsyncIterable` or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isAsyncIterable } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(
 *   isAsyncIterable({
 *     async *[Symbol.asyncIterator]() {
 *       yield "hello";
 *     },
 *   }),
 *   true,
 * );
 * assertEquals(isAsyncIterable(() => {}), false);
 * ```
 */
export function isAsyncIterable<T>(
  value: unknown,
): value is AsyncIterable<T> {
  return isFunction(Object(value)[Symbol.asyncIterator]);
}

/** Types for falsy values. */
export type FalsyLike =
  | typeof NaN
  | 0
  | -0
  | 0n
  | ""
  | null
  | undefined
  | false;

/** Whether the value is {@link FalsyLike} or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isFalsy } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isFalsy(0), true)
 * assertEquals(isFalsy(""), true)
 * assertEquals(isFalsy("a"), false)
 * ```
 */
export function isFalsy(value: unknown): value is FalsyLike {
  return !value;
}

/** Types for truthy values. */
export type TruthyLike =
  | Exclude<string, "">
  | Exclude<number, 0 | -0>
  | Exclude<bigint, 0n>
  | Exclude<boolean, false>
  | symbol
  | object;

/** Whether the value is {@link TruthyLike} or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isTruthy } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isTruthy(1), true)
 * assertEquals(isTruthy("a"), true)
 * assertEquals(isTruthy(0), false)
 * ```
 */
export function isTruthy(value: unknown): value is TruthyLike {
  return !!value;
}

/** Whether the value is `RegExp` of not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isRegExp } from "https://deno.land/x/isx@$VERSION/mod.ts";
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
 * assertEquals(isRegExp(new RegExp("")), true);
 * assertEquals(isRegExp({}), false);
 * ```
 */
export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp;
}

/** Whether the value is empty object or not.
 * @param value - Any value.
 * @example
 * ```ts
 * import { isEmptyObject } from "https://deno.land/x/isx@$VERSION/mod.ts";
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
 * assertEquals(isEmptyObject({}), true);
 * assertEquals(isEmptyObject({ a: "b" }), false);
 * assertEquals(isEmptyObject([]), false);
 * ```
 */
export function isEmptyObject(value: unknown): value is Record<never, never> {
  return !Object.getOwnPropertyNames(value).length &&
    !Object.getOwnPropertySymbols(value).length;
}
