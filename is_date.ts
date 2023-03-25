// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `Date` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isDate } from "https://deno.land/x/isx@$VERSION/is_date.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isDate(new Date()), true)
 * assertEquals(isDate({}), false)
 * ```
 */
export function isDate(input: unknown): input is Date {
  return input instanceof Date;
}
