// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is non negative integer or not.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { isNonNegativeInteger } from "https://deno.land/x/isx@$VERSION/number/is_non_negative_integer.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isNonNegativeInteger(0), true)
 * assertEquals(isNonNegativeInteger(1.0), true)
 * assertEquals(isNonNegativeInteger(-1), false)
 * ```
 */
export function isNonNegativeInteger(input: number): boolean {
  return Number.isInteger(input) && input >= 0;
}
