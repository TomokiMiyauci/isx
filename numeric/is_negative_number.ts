// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is negative number or not.
 * @param input - Any numeric.
 * @example
 * ```ts
 * import { isNegativeNumber } from "https://deno.land/x/isx@$VERSION/numeric/is_negative_number.ts"
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts"
 * assert(isNegativeNumber(-1))
 * assertFalse(isNegativeNumber(0))
 * ```
 */
export function isNegativeNumber(input: number | bigint): boolean {
  return input < 0;
}
