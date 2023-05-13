// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isPositiveNumber } from "./is_positive_number.ts";

/** Whether the input is positive integer or not.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { isPositiveInteger } from "https://deno.land/x/isx@$VERSION/number/is_positive_integer.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 * assertEquals(isPositiveInteger(1), true);
 * assertEquals(isPositiveInteger(0), false);
 * ```
 */
export function isPositiveInteger(input: number): boolean {
  return Number.isInteger(input) && isPositiveNumber(input);
}
