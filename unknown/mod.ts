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
import { isValidDate as _isValidDate } from "../Date/mod.ts";

/** Whether the value is `string` or not.
 * @param value - Any value.
 * ```ts
 * import { isString } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isString('hello world'))
 * assertFalse(isString(1000))
 * ```
 */
export function isString(value: unknown): value is string {
  return typeof value === "string";
}

/** Whether the value is `number` or not.
 * @param value - Any value.
 * ```ts
 * import { isNumber } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isNumber(1000))
 * assertFalse(isNumber('hello world'))
 * ```
 */
export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

/** Whether the value is `null` or not.
 * @param value - Any value.
 * ```ts
 * import { isNull } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isNull(null))
 * assertFalse(isNull(undefined))
 * ```
 */
export function isNull(value: unknown): value is null {
  return value === null;
}

/** Whether the value is `undefined` or not.
 * @param value - Any value.
 * ```ts
 * import { isUndefined } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isUndefined(undefined))
 * assertFalse(isUndefined(null))
 * ```
 */
export function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined";
}

/** Whether the value is `true` or not.
 * @param value - Any value.
 * ```ts
 * import { isTrue } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isTrue(true))
 * assertFalse(isTrue(false))
 * ```
 */
export function isTrue(value: unknown): value is true {
  return value === true;
}

/** Whether the value is `false` or not.
 * @param value - Any value.
 * ```ts
 * import { isFalse } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isFalse(false))
 * assertFalse(isFalse(true))
 * ```
 */
export function isFalse(value: unknown): value is false {
  return value === false;
}

/** Whether the value is `boolean` or not.
 * @param value - Any value.
 * ```ts
 * import { isBoolean } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isBoolean(true))
 * assertFalse(isBoolean(null))
 * ```
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

/** Whether the value is nill or not.
 * @param value - Any value.
 * ```ts
 * import { isNil } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isNil(null))
 * assertTrue(isNil(undefined))
 * assertFalse(isNil({}))
 * ```
 */
export function isNil(value: unknown): value is null | undefined {
  return isNull(value) || isUndefined(value);
}

/** Whether the value is `Function` or not.
 * @param value - Any value.
 * ```ts
 * import { isFunction } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isFunction(() => {}))
 * assertFalse(isFunction({}))
 * ```
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === "function";
}

/** Whether the value is `object` or not.
 * @param value - Any value.
 * ```ts
 * import { isObject } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isObject({}))
 * assertFalse(isObject(null))
 * ```
 */
export function isObject(value: unknown): value is object {
  return typeof value === "object" && !isNull(value);
}

/** Whether the value is `symbol` or not.
 * @param value - Any value.
 * ```ts
 * import { isSymbol } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isSymbol(Symbol("symbol")))
 * assertFalse(isSymbol(null))
 * ```
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}

/** Whether the value is `Date` or not.
 * @param value - Any value.
 * ```ts
 * import { isDate } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isDate(new Date()))
 * assertFalse(isDate({}))
 * ```
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

/** Whether the value is `Iterable` or not.
 * @param value - Any value.
 * ```ts
 * import { isIterable } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isIterable("")
 * assertFalse(isIterable({}))
 * ```
 */
export function isIterable<T>(value: unknown): value is Iterable<T> {
  return Symbol.iterator in Object(value);
}

/** Whether the value is empty or not.
 * @param value - Any value.
 * ```ts
 * import { isEmpty } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isEmpty("")
 * assertTrue(isEmpty([])
 * assertTrue(isEmpty({}))
 * assertFalse(isEmpty({ a: "b" }))
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
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isError(Error())
 * assertFalse(isError(new SyntaxError()))
 * ```
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

/** Whether the value is {@link Primitive} or not.
 * @param value - Any value.
 * ```ts
 * import { isPrimitive } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isPrimitive(true))
 * assertFalse(isPrimitive(() => {}))
 * ```
 */
export function isPrimitive(value: unknown): value is Primitive {
  return !isObject(value) && !isFunction(value);
}

/** Whether the value is `Promise` or not.
 * @param value - Any value.
 * ```ts
 * import { isPromise } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isPromise(Promise.resolve()))
 * assertFalse(isPromise({}))
 * ```
 */
export function isPromise<T>(value: unknown): value is Promise<T> {
  return value instanceof Promise;
}

/** Whether the value is odd or not.
 * @param value - Any value.
 * ```ts
 * import { isOdd } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isOdd(1))
 * assertFalse(isOdd(0))
 * ```
 */
export function isOdd(value: unknown): value is number {
  return isNumber(value) && _isOdd(value);
}

/** Whether the value is even or not.
 * @param value - Any value.
 * ```ts
 * import { isEven } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isEven(0))
 * assertFalse(isEven(1))
 * ```
 */
export function isEven(value: unknown): value is number {
  return isNumber(value) && _isEven(value);
}

/** Whether the value is positive number or not.
 * @param value - Any value.
 * ```ts
 * import { isPositiveNumber } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isPositiveNumber(1))
 * assertFalse(isPositiveNumber(0))
 * ```
 */
export function isPositiveNumber(value: unknown): value is number {
  return isNumber(value) && _isPositiveNumber(value);
}

/** Whether the value is negative number or not.
 * @param value - Any value.
 * ```ts
 * import { isNegativeNumber } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isNegativeNumber(-1))
 * assertFalse(isNegativeNumber(0))
 * ```
 */
export function isNegativeNumber(value: unknown): value is number {
  return isNumber(value) && _isNNegativeNumber(value);
}

/** Whether the value is Date format or not.
 * @param value - Any value.
 * ```ts
 * import { isDateFormat } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isDateFormat("2021-12-31T15:00:00.000Z"))
 * assertTrue(isDateFormat("2022/1/1"))
 * assertFalse(isDateFormat("invalid date"))
 * ```
 */
export function isDateFormat(value: unknown): value is string {
  return isString(value) && _isDateFormat(value);
}

/** Whether the value is Hex color or not.
 * @param value - Any `string`.
 * ```ts
 * import { isHexColor } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isHexColor("#000000"))
 * assertTrue(isHexColor("#FFF"))
 * assertFalse(isHexColor("#ggg"))
 * ```
 */
export function isHexColor(value: unknown): boolean {
  return isString(value) && _isHexColor(value);
}

/** Whether the value is valid `Date` or not.
 * @param value - Any value.
 * ```ts
 * import { isValidDate } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isValidDate(new Date("2000/1/1")))
 * assertFalse(isValidDate(new Date("invalid")))
 * ```
 */
export function isValidDate(value: unknown): value is Date {
  return isDate(value) && _isValidDate(value);
}
