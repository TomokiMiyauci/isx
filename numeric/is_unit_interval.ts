// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is unit interval or not.
 * The unit interval refers to the interval between 0 and 1 on the real number line.
 * @param input Any numeric
 * @example
 * ```ts
 * import { isUnitInterval } from "https://deno.land/x/isx@$VERSION/numeric/is_unit_interval.ts";
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 * assert(isUnitInterval(0));
 * assert(isUnitInterval(1.0));
 * assertFalse(isUnitInterval(-1));
 * ```
 */
export function isUnitInterval(input: number | bigint): boolean {
  return 0 <= input && input <= 1;
}
