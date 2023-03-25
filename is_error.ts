// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `Error` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isError } from "https://deno.land/x/isx@$VERSION/is_error.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isError(Error()), true)
 * assertEquals(isError(new SyntaxError()), true)
 * assertEquals(isError(new Date()), false);
 * ```
 */
export function isError(input: unknown): input is Error {
  return input instanceof Error;
}
