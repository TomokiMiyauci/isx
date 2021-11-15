/**
 * Whatever argument is type of `number` or not
 *
 * @param val - Input any value
 * @returns The result of `typeof val === 'number'`
 *
 * @example
 * ```ts
 * isNumber(0) // true
 * isNumber('hello') // false
 * ```
 *
 * @beta
 */
function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export { isNumber };
