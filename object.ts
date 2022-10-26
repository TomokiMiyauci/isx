// Copyright 2022-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the value has the property or not.
 * The difference from `Object.hasOwn` is that it has a Type guard.
 * @param key Any property key.
 * @param value Any object.
 * @example
 * ```ts
 * import { hasOwn } from "https://deno.land/x/isx@$VERSION/mod.ts";
 *
 * const object: object = {};
 * if (hasOwn("", object)) {
 *   object[""]; // No type error.
 * }
 * ```
 */
export function hasOwn<T extends PropertyKey, U extends {}>(
  key: T,
  value: U,
): value is U & { [k in T]: unknown } {
  return Object.hasOwn(value, key);
}
