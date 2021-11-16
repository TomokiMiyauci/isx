/**
 * Whatever argument is type of `function` or not
 *
 * @param val - Input any value
 * @returns The result of `typeof val === 'function'`
 *
 * @example
 * ```ts
 * import { isFunction } from './mod.ts'
 * isFunction(() => {}) // true
 * isFunction({}) // false
 * ```
 *
 * @beta
 */
// deno-lint-ignore ban-types
function isFunction(value: unknown): value is Function {
  return typeof value === "function";
}

export { isFunction };
