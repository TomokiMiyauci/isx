/**
 * Whatever argument length is `0` or not.
 *
 * @param val - Any value what have length property
 * @returns The result of `!val.length`
 *
 * @example
 * ```ts
 * isLength0([]) // true
 * isLength0('hello') // false
 * ```
 *
 * @beta
 */
const isLength0 = (val: { length: number }): boolean => !val.length;

export { isLength0 };
