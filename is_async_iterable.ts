// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isFunction } from "./is_function.ts";

/** Whether the input is `AsyncIterable` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isAsyncIterable } from "https://deno.land/x/isx@$VERSION/is_async_iterable.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(
 *   isAsyncIterable({
 *     async *[Symbol.asyncIterator]() {
 *       yield "hello";
 *     },
 *   }),
 *   true,
 * );
 * assertEquals(isAsyncIterable(() => {}), false);
 * ```
 */
export function isAsyncIterable<T>(input: unknown): input is AsyncIterable<T> {
  return isFunction(Object(input)[Symbol.asyncIterator]);
}
