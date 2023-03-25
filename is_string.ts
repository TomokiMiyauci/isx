// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `string` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isString } from "https://deno.land/x/isx@$VERSION/is_string.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isString('hello world'), true)
 * assertEquals(isString(1000), false)
 * ```
 */
export function isString(input: unknown): input is string {
  return typeof input === "string";
}
