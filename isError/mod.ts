/**
 * Whatever argument is `Error` or not
 *
 * @param val - Input any value
 * @returns The result of `value instanceof Error`
 *
 * @example
 * ```ts
 * import { isError } from './mod.ts'
 * isError(Error()) // true
 * isError({}) // false
 * ```
 *
 * @beta
 */
function isError(value: unknown): value is Error {
  return value instanceof Error;
}

export { isError };
