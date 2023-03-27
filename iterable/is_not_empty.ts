// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the array is not empty or not.
 * @param input Any array.
 *
 * @example
 * ```ts
 * import { isNotEmpty } from "https://deno.land/x/isx@$VERSION/iterable/is_not_empty.ts";
 * import { assert } from "https://deno.land/std/testing/asserts.ts";
 *
 * assert(isNotEmpty([""]));
 * assert(isNotEmpty([[]]));
 * ```
 */
export function isNotEmpty<T>(
  input: readonly T[],
): input is readonly [T, ...T[]];
/** Whether the input is not empty or not.
 * @param input Any iterable.
 *
 * @example
 * ```ts
 * import { isNotEmpty } from "https://deno.land/x/isx@$VERSION/iterable/is_not_empty.ts";
 * import { assert } from "https://deno.land/std/testing/asserts.ts";
 *
 * assert(isNotEmpty("abc"));
 * assert(isNotEmpty([new Set([0, 1, 2])]));
 * ```
 */
export function isNotEmpty(input: Iterable<unknown>): boolean;
export function isNotEmpty(input: Iterable<unknown>): boolean {
  return !![...input].length;
}
