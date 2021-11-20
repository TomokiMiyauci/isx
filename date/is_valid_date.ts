/**
 * Whatever argument is valid `Date` or not
 *
 * @param value - Input `Date`
 * @returns The result of `!Number.isNaN(value.getTime())`
 *
 * @example
 * ```ts
 * import { isValidDate } from './mod.ts'
 * isValidDate(new Date('2000/1/1')) // true
 * isValidDate(new Date('invalid')) // false
 * ```
 *
 * @beta
 */
function isValidDate(value: Date): boolean {
  return !Number.isNaN(value.getTime());
}

export { isValidDate };
