// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is non-positive number or not.
 * Non-positive number means less than or equal to zero.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { isNonPositiveNumber } from "https://deno.land/x/isx@$VERSION/number/is_non_positive_number.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 * assertEquals(isNonPositiveNumber(0), true);
 * assertEquals(isNonPositiveNumber(-1), true);
 * assertEquals(isNonPositiveNumber(1), false);
 * ```
 */
export function isNonPositiveNumber(input: number): boolean {
  return Number.isFinite(input) && input <= 0;
}
