// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `number` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isNumber } from "https://deno.land/x/isx@$VERSION/is_number.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isNumber(1000), true)
 * assertEquals(isNumber('hello world'), false)
 * ```
 */
export function isNumber(input: unknown): input is number {
  return typeof input === "number";
}
