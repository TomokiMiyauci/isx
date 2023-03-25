// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `null` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isNull } from "https://deno.land/x/isx@$VERSION/is_null.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isNull(null), true)
 * assertEquals(isNull(undefined), false)
 * ```
 */
export function isNull(input: unknown): input is null {
  return input === null;
}
