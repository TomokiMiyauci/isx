import { isObject } from "../isObject/mod.ts";
import { isFunction } from "../isFunction/mod.ts";

type Primitive = number | string | boolean | bigint | undefined | null | symbol;

/**
 * Whatever argument is primitive value or not
 *
 * @param val - Input any value
 * @returns The result of `Primitive` or not
 *
 * @example
 * ```ts
 * import { isPrimitive } from './mod.ts'
 * isPrimitive(true) // true
 * isPrimitive({}) // false
 * ```
 *
 * @beta
 */
function isPrimitive(value: unknown): value is Primitive {
  return !isObject(value) && !isFunction(value);
}

export { isPrimitive };
