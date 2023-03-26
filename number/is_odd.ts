// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is odd or not.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { isOdd } from "https://deno.land/x/isx@$VERSION/number/is_odd.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isOdd(1), true)
 * assertEquals(isOdd(0), false)
 * ```
 */
export function isOdd(input: number): boolean {
  return Math.abs(input) % 2 === 1;
}
