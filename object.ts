/** Whether the value has the property or not.
 * The difference from `Object.hasOwn` is that it has a Type guard.
 *
 * @params Any `PropertyKey`.
 * @prams Any `object`.
 *
 * ```ts
 * import { hasOwn } from "https://deno.land/x/isx@$VERSION/mod.ts";
 *
 * const object: object = {};
 * if (hasOwn("", object)) {
 *   object[""]; // No type error.
 * }
 * ```
 */
// deno-lint-ignore ban-types
export function hasOwn<T extends PropertyKey, U extends object>(
  key: T,
  value: U,
): value is U & { [k in T]: unknown } {
  return Object.hasOwn(value, key);
}
