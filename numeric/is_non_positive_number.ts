// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is non-positive number or not.
 * Non-positive number means less than or equal to zero.
 * @param input - Any numeric.
 * @example
 * ```ts
 * import { isNonPositiveNumber } from "https://deno.land/x/isx@$VERSION/numeric/is_non_positive_number.ts";
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 * assert(isNonPositiveNumber(0));
 * assert(isNonPositiveNumber(-1));
 * assertFalse(isNonPositiveNumber(1));
 * ```
 */
export function isNonPositiveNumber(input: number | bigint): boolean {
  return input <= 0;
}
