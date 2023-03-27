// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Weather the string is empty or not.
 * @param input Any string.
 *
 * @example
 * ```ts
 * import { isEmpty } from "https://deno.land/x/isx@$VERSION/iterable/is_empty.ts";
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * assert(isEmpty(""));
 * assertFalse(isEmpty("a"));
 * ```
 */
export function isEmpty(input: string): input is "";
/** Weather the array is empty or not.
 * @param input Any array.
 *
 * @example
 * ```ts
 * import { isEmpty } from "https://deno.land/x/isx@$VERSION/iterable/is_empty.ts";
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * assert(isEmpty([]));
 * assertFalse(isEmpty([""]));
 * ```
 */
export function isEmpty(input: unknown[]): input is [];
export function isEmpty(input: readonly unknown[]): input is readonly [];
/** Wether the input is empty or not.
 * @param input Any iterable.
 *
 * @example
 * ```ts
 * import { isEmpty } from "https://deno.land/x/isx@$VERSION/iterable/is_empty.ts";
 * import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * assert(isEmpty(new Set()));
 * assertFalse(isEmpty(new Set("")));
 * ```
 */
export function isEmpty(input: Iterable<unknown>): boolean;
export function isEmpty(input: Iterable<unknown>): boolean {
  return ![...input].length;
}
