// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is negative number or not.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { isNegativeNumber } from "https://deno.land/x/isx@$VERSION/number/is_negative_number.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isNegativeNumber(-1), true)
 * assertEquals(isNegativeNumber(0), false)
 * ```
 */
export function isNegativeNumber(input: number): boolean {
  return Number.isFinite(input) && input < 0;
}
