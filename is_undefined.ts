// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `undefined` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isUndefined } from "https://deno.land/x/isx@$VERSION/is_undefined.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isUndefined(undefined), true)
 * assertEquals(isUndefined(null), false)
 * ```
 */
export function isUndefined(input: unknown): input is undefined {
  return typeof input === "undefined";
}
