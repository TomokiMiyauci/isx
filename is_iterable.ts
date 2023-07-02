// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isFunction } from "./is_function.ts";

/** Whether the input is `Iterable` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isIterable } from "https://deno.land/x/isx@$VERSION/is_iterable.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isIterable(""), true)
 * assertEquals(isIterable({}), false)
 * ```
 *
 * @deprecated Use {@link object/is_iterable} instead.
 */
export function isIterable<T>(input: unknown): input is Iterable<T> {
  return isFunction(Object(input)[Symbol.iterator]);
}
