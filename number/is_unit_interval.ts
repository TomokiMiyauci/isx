// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is unit interval or not.
 * The unit interval refers to the interval between 0 and 1 on the real number line.
 * @param input Any `number`
 * @example
 * ```ts
 * import { isUnitInterval } from "https://deno.land/x/isx@$VERSION/number/is_unit_interval.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 * assertEquals(isUnitInterval(0), true);
 * assertEquals(isUnitInterval(1.0), true);
 * assertEquals(isUnitInterval(-1), false);
 * ```
 *
 * @deprecated use numeric::isUnitInterval
 */
export function isUnitInterval(input: number): boolean {
  return 0 <= input && input <= 1;
}
