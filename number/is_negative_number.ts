// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is negative number or not.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { isNegativeNumber } from "https://deno.land/x/isx@$VERSION/number/is_negative_number.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isNegativeNumber(-1), true)
 * assertEquals(isNegativeNumber(0), false)
 * ```
 *
 * @deprecated use numeric::isNegativeNumber
 */
export function isNegativeNumber(input: number): boolean {
  return input < 0;
}
