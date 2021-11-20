/**
 * Whatever argument is `false` or not
 *
 * @param val - Input any value
 * @returns The result of `value === false``
 *
 * @example
 * ```ts
 * isFalse(false) // true
 * isFalse(true) // false
 * ```
 *
 * @beta
 */
function isFalse(value: unknown): value is false {
  return value === false;
}

export { isFalse };
