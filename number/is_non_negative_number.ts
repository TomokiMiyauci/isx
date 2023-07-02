// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isPositiveNumber } from "./is_positive_number.ts";

/** Whether the input is non-negative number or not.
 * Non-negative number means greater than or equal to zero.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { isNonNegativeNumber } from "https://deno.land/x/isx@$VERSION/number/is_non_negative_number.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 * assertEquals(isNonNegativeNumber(0), true);
 * assertEquals(isNonNegativeNumber(1), true);
 * assertEquals(isNonNegativeNumber(-1), false);
 * ```
 *
 * @deprecated use numeric::isNonNegativeNumber
 */
export function isNonNegativeNumber(input: number): boolean {
  return input === 0 || isPositiveNumber(input);
}
