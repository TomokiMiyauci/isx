// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is positive number or not.
 * @param input - Any numeric.
 * @example
 * ```ts
 * import { isPositiveNumber } from "https://deno.land/x/isx@$VERSION/numeric/is_positive_number.ts"
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts"
 * assert(isPositiveNumber(1))
 * assert(isPositiveNumber(Infinity))
 * assertFalse(isPositiveNumber(0))
 * ```
 */
export function isPositiveNumber(input: number | bigint): boolean {
  return input > 0;
}
