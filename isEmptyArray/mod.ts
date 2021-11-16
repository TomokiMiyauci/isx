/**
 * Whatever argument is empty array or not
 * @param value - Any array
 * @returns The result of `!!value.length`
 *
 * @example
 * ```ts
 * import { isEmptyArray } from './mod.ts'
 * isEmptyArray([]) // true
 * isEmptyArray(['test']) // false
 * ```
 *
 * @beta
 */
function isEmptyArray(value: unknown[]): value is [] {
  return Array.isArray(value) && !value.length;
}

export { isEmptyArray };
