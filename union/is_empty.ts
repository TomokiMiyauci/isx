import { isIterable } from "../iterable/is_iterable.ts";
import { isLength0 } from "../isLength0/mod.ts";
/** Whatever argument is empty or not
 * ```ts
 * isEmpty("") // true
 * isEmpty({}) // true
 * isEmpty(new Set()) // true
 * isEmpty([1, 2, 3]) // false
 * ```
 * @beta
 */
function isEmpty<T>(
  value: Iterable<T> | Record<PropertyKey, unknown>,
): boolean {
  const iterable = isIterable(value);

  if (iterable) {
    const { done } = value[Symbol.iterator]().next();
    return done ?? false;
  } else {
    // check {} or not
    return isLength0(Object.keys(value)) &&
      isLength0(Object.getOwnPropertySymbols(value));
  }
}

export { isEmpty };
