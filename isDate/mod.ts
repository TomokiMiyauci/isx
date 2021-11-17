/**
 * Whatever argument is `Date` or not
 *
 * @param val - Input any value
 * @returns The result of `value instanceof Date`
 *
 * @example
 * ```ts
 * import { isDate } from './mod.ts'
 * isDate(new Date()) // true
 * isDate({}) // false
 * ```
 *
 * @beta
 */
function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

export { isDate };
