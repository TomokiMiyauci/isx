// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isFunction } from "./is_function.ts";

/** Whether the input is `AsyncIterable` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isAsyncIterable } from "https://deno.land/x/isx@$VERSION/is_async_iterable.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
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
 *
 * @deprecated Use {@link object/is_async_iterable} instead.
 */
export function isAsyncIterable<T>(input: unknown): input is AsyncIterable<T> {
  return isFunction(Object(input)[Symbol.asyncIterator]);
}
