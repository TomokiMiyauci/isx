/**
 * Whatever argument length is `0` or not.
 *
 * @param val - Any value what have length property
 * @returns The result of `!val.length`
 *
 * @example
 * ```ts
 * import { isLength0 } from './mod.ts'
 * isLength0([]) // true
 * isLength0('hello') // false
 * ```
 *
 * @beta
 */
function isLength0(val: { length: number }): boolean {
  return !val.length;
}

export { isLength0 };
