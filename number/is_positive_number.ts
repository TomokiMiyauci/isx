// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is positive number or not.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { isPositiveNumber } from "https://deno.land/x/isx@$VERSION/number/is_positive_number.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isPositiveNumber(1), true)
 * assertEquals(isPositiveNumber(Infinity), true);
 * assertEquals(isPositiveNumber(0), false)
 * ```
 *
 * @deprecated use numeric::isPositiveNumber
 */
export function isPositiveNumber(input: number): boolean {
  return 0 < input;
}
