import { isNull } from "../isNull/mod.ts";
import { isUndefined } from "../isUndefined/mod.ts";

/**
 * Whatever argument is type of `null` or `undefined` not
 *
 * @param value - Input any value
 * @returns The result of `value === null` | `typeof value === 'undefined'`
 *
 * @example
 * ```ts
 * import { isNil } from './mod.ts'
 * isNil(null) // true
 * isNil(undefined) // true
 * isNil({}) // false
 * ```
 *
 * @beta
 */
function isNil(value: unknown): value is null | undefined {
  return isNull(value) || isUndefined(value);
}

export { isNil };
