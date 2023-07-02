// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `object` or not.
 * @param input - Any input.
 *
 * ```ts
 * import { isObject } from "https://deno.land/x/isx@$VERSION/is_object.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isObject({}), true)
 * assertEquals(isObject(null), false)
 * ```
 */
export function isObject(input: unknown): input is object {
  const type = typeof input;

  return (type === "object" && !!input) || type === "function";
}
