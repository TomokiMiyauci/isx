/**
 * Whatever argument is type of `undefined` or not
 *
 * @param val - Input any value
 * @returns The result of `typeof val === 'undefined'`
 *
 * @example
 * ```ts
 * isUndefined(undefined) // true
 * isUndefined(null) // false
 * ```
 *
 * @beta
 */
function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined";
}

export { isUndefined };
