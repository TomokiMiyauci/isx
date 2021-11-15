/**
 * Whatever argument is type of `string` or not.
 *
 * @param val - Input any value
 * @returns The result of `typeof val === 'string'`
 *
 * @example
 * ```ts
 * isString('hello world') // true
 * isString(1000) // false
 * ```
 *
 * @beta
 */
function isString(value: unknown): value is string {
  return typeof value === "boolean";
}

export { isString };
