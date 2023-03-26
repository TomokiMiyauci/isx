// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `Function` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isFunction } from "https://deno.land/x/isx@$VERSION/is_function.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isFunction(() => {}), true)
 * assertEquals(isFunction({}), false)
 * ```
 */
export function isFunction(input: unknown): input is Function {
  return typeof input === "function";
}
