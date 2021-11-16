/**
 * Whatever argument is type of `null` or not
 *
 * @param value - Input any value
 * @returns The result of `value === null`
 *
 * @example
 * ```ts
 * import { isNull } from './mod.ts'
 * isNull(null) // true
 * isNull(undefined) // false
 * ```
 *
 * @beta
 */
function isNull(value: unknown): value is null {
  return value === null;
}

export { isNull };
