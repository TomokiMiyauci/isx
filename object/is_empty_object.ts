import { isLength0 } from "../isLength0/mod.ts";
import { hasSize, isSize0 } from "./is_size_0.ts";

/** Whatever argument is empty object or not
 * ```ts
 * isEmptyObject({}) // true
 * isEmptyObject([]) // true
 * isEmptyObject(new Map()) // true
 * isEmptyObject(new Set()) // true
 * isEmptyObject({ 1: 1 }) // false
 * ```
 * @beta
 */
function isEmptyObject(value: object): boolean {
  if (hasSize(value)) {
    return isSize0(value);
  } else {
    return isLength0(Object.keys(value));
  }
}

export { isEmptyObject };
