import { isNil } from "../isNil/mod.ts";
import { isFunction } from "../isFunction/mod.ts";

/** Whatever argument is `iterable` or not
 * ```ts
 * isIterable("") // true
 * isIterable([]) // true
 * isIterable(null) // false
 * ```
 * @beta
 */
function isIterable<T>(value: unknown): value is Iterable<T> {
  if (isNil(value)) {
    return false;
  }

  return isFunction((value as never)[Symbol.iterator]);
}

export { isIterable };
