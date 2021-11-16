/**
 * Whatever argument is empty string or not
 * @param value Any string value
 * @returns The result of `value === ''`
 *
 * @example
 * ```ts
 * import { isEmptyString } from './mod.ts'
 * isEmptyString('') // true
 * isEmptyString('test') // false
 * ```
 *
 * @beta
 */
function isEmptyString(value: string): value is "" {
  return value === "";
}

export { isEmptyString };
