// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is non-negative number or not.
 * Non-negative number means greater than or equal to zero.
 * @param input - Any numeric.
 * @example
 * ```ts
 * import { isNonNegativeNumber } from "https://deno.land/x/isx@$VERSION/numeric/is_non_negative_number.ts";
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 * assert(isNonNegativeNumber(0));
 * assert(isNonNegativeNumber(1));
 * assertFalse(isNonNegativeNumber(-1));
 * ```
 */
export function isNonNegativeNumber(input: number | bigint): boolean {
  return input >= 0;
}
