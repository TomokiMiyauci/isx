import { isNull } from "../isNull/mod.ts";
/**
 * Whatever argument is type of `object` or not
 *
 * @param value - Input any value
 * @returns The result of `typeof value === "object" && value !== null`
 *
 * @example
 * ```ts
 * import { isObject } from './mod.ts'
 * isObject({}) // true
 * isObject(null) // false
 * ```
 *
 * @beta
 */
// deno-lint-ignore ban-types
function isObject(value: unknown): value is object {
  return typeof value === "object" && !isNull(value);
}

export { isObject };
