// deno-lint-ignore-file ban-types
import { Primitive } from "../types.ts";
import {
  isEven as _isEven,
  isNegativeNumber as _isNNegativeNumber,
  isOdd as _isOdd,
  isPositiveNumber as _isPositiveNumber,
} from "../number/mod.ts";
import {
  isDateFormat as _isDateFormat,
  isHexColor as _isHexColor,
} from "../string/mod.ts";
import { isValidDate as _isValidDate } from "../date/mod.ts";

/** Whether the value is `string` or not.
 * @param value - Any value.
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

/** Whether the value is `null` or not.
 * @param value - Any value.
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

/** Whether the value is nill or not.
 * @param value - Any value.
 * ```ts
 * import { isNil } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isNil(null), true)
 * assertEquals(isNil(undefined), true)
 * assertEquals(isNil({}), false)
 * ```
 */
export function isNil(value: unknown): value is null | undefined {
  return isNull(value) || isUndefined(value);
}

/** Whether the value is `Function` or not.
 * @param value - Any value.
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

/** Whether the value is Plain(literal) object or not.
 * @param value - Any value.
 * ```ts
 * import { isPlainObject } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isPlainObject({}), true)
 * assertEquals(isPlainObject([]), false)
 * ```
 */
export function isPlainObject(
  value: unknown,
): value is Record<PropertyKey, unknown> {
  return isObject(value) && value.constructor === Object;
}

/** Whether the value is `symbol` or not.
 * @param value - Any value.
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
 * ```ts
 * import { isIterable } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isIterable(""), true)
 * assertEquals(isIterable({}), false)
 * ```
 */
export function isIterable<T>(value: unknown): value is Iterable<T> {
  return Symbol.iterator in Object(value);
}

/** Whether the value is empty or not.
 * @param value - Any value.
 * ```ts
 * import { isEmpty } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isEmpty(""), true)
 * assertEquals(isEmpty([]), true)
 * assertEquals(isEmpty({}), true)
 * assertEquals(isEmpty({ a: "b" }), false)
 * ```
 */
export function isEmpty(value: unknown): boolean {
  if (isIterable(value)) {
    return !!value[Symbol.iterator]().next().done;
  }

  return isObject(value) && !Object.getOwnPropertyNames(value).length &&
    !Object.getOwnPropertySymbols(value).length;
}

/** Whether the value is `Error` or not.
 * @param value - Any value.
 * ```ts
 * import { isError } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isError(Error()), true)
 * assertEquals(isError(new SyntaxError()), false)
 * ```
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

/** Whether the value is {@link Primitive} or not.
 * @param value - Any value.
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

/** Whether the value is odd or not.
 * @param value - Any value.
 * ```ts
 * import { isOdd } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isOdd(1), true)
 * assertEquals(isOdd(0), false)
 * ```
 */
export function isOdd(value: unknown): value is number {
  return isNumber(value) && _isOdd(value);
}

/** Whether the value is even or not.
 * @param value - Any value.
 * ```ts
 * import { isEven } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isEven(0), true)
 * assertEquals(isEven(1), false)
 * ```
 */
export function isEven(value: unknown): value is number {
  return isNumber(value) && _isEven(value);
}

/** Whether the value is positive number or not.
 * @param value - Any value.
 * ```ts
 * import { isPositiveNumber } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isPositiveNumber(1), true)
 * assertEquals(isPositiveNumber(0), false)
 * ```
 */
export function isPositiveNumber(value: unknown): value is number {
  return isNumber(value) && _isPositiveNumber(value);
}

/** Whether the value is negative number or not.
 * @param value - Any value.
 * ```ts
 * import { isNegativeNumber } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isNegativeNumber(-1), true)
 * assertEquals(isNegativeNumber(0), false)
 * ```
 */
export function isNegativeNumber(value: unknown): value is number {
  return isNumber(value) && _isNNegativeNumber(value);
}

/** Whether the value is Date format or not.
 * @param value - Any value.
 * ```ts
 * import { isDateFormat } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isDateFormat("2021-12-31T15:00:00.000Z"), true)
 * assertEquals(isDateFormat("2022/1/1"), true)
 * assertEquals(isDateFormat("invalid date"), false)
 * ```
 */
export function isDateFormat(value: unknown): value is string {
  return isString(value) && _isDateFormat(value);
}

/** Whether the value is Hex color or not.
 * @param value - Any `string`.
 * ```ts
 * import { isHexColor } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isHexColor("#000000"), true)
 * assertEquals(isHexColor("#FFF"), true)
 * assertEquals(isHexColor("#ggg"), false)
 * ```
 */
export function isHexColor(value: unknown): boolean {
  return isString(value) && _isHexColor(value);
}

/** Whether the value is valid `Date` or not.
 * @param value - Any value.
 * ```ts
 * import { isValidDate } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isValidDate(new Date("2000/1/1")), true)
 * assertEquals(isValidDate(new Date("invalid")), false)
 * ```
 */
export function isValidDate(value: unknown): value is Date {
  return isDate(value) && _isValidDate(value);
}
