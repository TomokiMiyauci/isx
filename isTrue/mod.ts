/**
 * Whatever argument is `true` or not
 *
 * @param val - Input any value
 * @returns The result of `value === true``
 *
 * @example
 * ```ts
 * isTrue(true) // true
 * isTrue(false) // false
 * ```
 *
 * @beta
 */
function isTrue(value: unknown): value is true {
  return value === true;
}

export { isTrue };
