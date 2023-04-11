// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the array is single element or not.
 * @param input Any array.
 *
 * @example
 * ```ts
 * import { isSingle } from "https://deno.land/x/isx@$VERSION/iterable/is_single.ts";
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * assert(isSingle([0]));
 * assertFalse(isSingle([]));
 * assertFalse(isSingle([0, 1, 2]));
 * ```
 */
export function isSingle<T>(input: T[]): input is [T];
export function isSingle<T>(input: readonly T[]): input is readonly [T];
/** Whether the input is single element or not.
 * @param input Any iterable.
 *
 * @example
 * ```ts
 * import { isSingle } from "https://deno.land/x/isx@$VERSION/iterable/is_single.ts";
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * assert(isSingle("a"));
 * assertFalse(isSingle(""));
 * assertFalse(isSingle(new Set([0, 1, 2])));
 * ```
 */
export function isSingle(input: Iterable<unknown>): boolean;
export function isSingle(input: Iterable<unknown>): boolean {
  const iterator = input[Symbol.iterator]();

  return !iterator.next().done && !!iterator.next().done;
}
