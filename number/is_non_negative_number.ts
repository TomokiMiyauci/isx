// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is non-negative number or not.
 * Non-negative number means greater than or equal to zero.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { isNonNegativeNumber } from "https://deno.land/x/isx@$VERSION/number/is_non_negative_number.ts";
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
 * assertEquals(isNonNegativeNumber(0), true);
 * assertEquals(isNonNegativeNumber(1), true);
 * assertEquals(isNonNegativeNumber(-1), false);
 * ```
 */
export function isNonNegativeNumber(input: number): boolean {
  return Number.isFinite(input) && 0 <= input;
}
