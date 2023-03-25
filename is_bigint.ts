// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `bigint` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isBigint } from "https://deno.land/x/isx@$VERSION/is_bigint.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isBigint(1000n), true)
 * assertEquals(isBigint(undefined), false)
 * ```
 */
export function isBigint(input: unknown): input is bigint {
  return typeof input === "bigint";
}
