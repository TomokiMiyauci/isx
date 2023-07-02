// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isFunction } from "../is_function.ts";

/** Whether the input is `AsyncIterable` or not.
 * @param input - Any object.
 * @example
 * ```ts
 * import { isAsyncIterable } from "https://deno.land/x/isx@$VERSION/object/is_async_iterable.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(
 *   isAsyncIterable({
 *     async *[Symbol.asyncIterator]() {
 *       yield "hello";
 *     },
 *   }),
 *   true,
 * );
 * assertEquals(isAsyncIterable({}), false);
 * ```
 */
export function isAsyncIterable(
  input: Readonly<{ [Symbol.asyncIterator]?: unknown }>,
): input is AsyncIterable<unknown> {
  return isFunction(input[Symbol.asyncIterator]);
}
