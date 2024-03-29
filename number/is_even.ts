// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is even or not.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { isEven } from "https://deno.land/x/isx@$VERSION/number/is_even.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isEven(0), true)
 * assertEquals(isEven(1), false)
 * ```
 */
export function isEven(input: number): boolean {
  return Math.abs(input) % 2 === 0;
}
