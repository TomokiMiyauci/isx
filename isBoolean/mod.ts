/**
 * Whatever argument is type of `boolean` or not
 *
 * @param val - Input any value
 * @returns The result of `typeof val === 'boolean'`
 *
 * @example
 * ```ts
 * isBoolean(true) // true
 * isBoolean('hello') // false
 * ```
 *
 * @beta
 */
function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

export { isBoolean };
