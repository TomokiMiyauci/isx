/**
 * Whatever argument is `Promise` or not
 *
 * @param val - Input any value
 * @returns The result of `value instanceof Promise`
 *
 * @example
 * ```ts
 * import { isPromise } from './mod.ts'
 * isPromise(Promise.resolve()) // true
 * isPromise({}) // false
 * ```
 *
 * @beta
 */
function isPromise<T = unknown>(value: unknown): value is Promise<T> {
  return value instanceof Promise;
}

export { isPromise };
