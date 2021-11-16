import { isEmptyArray } from "../isEmptyArray/mod.ts";
import { isObject } from "../isObject/mod.ts";
/**
 * Whatever argument is `{}` or not
 * @param value - Input any value
 * @returns The result of `{}` or not
 *
 * @example
 * ```ts
 * import { isEmptyObject } from './mod.ts'
 * isEmptyObject({}) // true
 * isEmptyObject({ a: 1 }) // false
 * ```
 *
 * @beta
 */
// deno-lint-ignore ban-types
function isEmptyObject(value: unknown): value is {} {
  return isObject(value) &&
    value.constructor === Object &&
    isEmptyArray(Object.keys(value));
}

export { isEmptyObject };
