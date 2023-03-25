// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `Promise` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isPromise } from "https://deno.land/x/isx@$VERSION/is_promise.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isPromise(Promise.resolve()), true)
 * assertEquals(isPromise({}), false)
 * ```
 */
export function isPromise<T>(input: unknown): input is Promise<T> {
  return input instanceof Promise;
}
