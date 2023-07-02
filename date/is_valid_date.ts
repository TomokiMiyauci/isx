// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is valid `Date` or not.
 * @param input - Any `Date`
 * @example
 * ```ts
 * import { isValidDate } from "https://deno.land/x/isx@$VERSION/date/is_valid_date.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isValidDate(new Date("2000/1/1")), true)
 * assertEquals(isValidDate(new Date("invalid")), false)
 * ```
 */
export function isValidDate(input: Date): boolean {
  return !Number.isNaN(input.getTime());
}
