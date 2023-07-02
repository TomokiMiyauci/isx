// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isFunction } from "../is_function.ts";

/** Whether the input is `Iterable` or not.
 * @param input - Any object.
 * @example
 * ```ts
 * import { isIterable } from "https://deno.land/x/isx@$VERSION/object/is_iterable.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isIterable(""), true)
 * assertEquals(isIterable({}), false)
 * ```
 */
export function isIterable(
  input: Readonly<{ [Symbol.iterator]?: unknown }>,
): input is Iterable<unknown> {
  return isFunction(input[Symbol.iterator]);
}
