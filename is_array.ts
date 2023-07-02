// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is array or not.
 *
 * @param Any input.
 *
 * @example
 * ```ts
 * import { isArray } from "https://deno.land/x/isx@$VERSION/is_array.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 * assertEquals(isArray([]), true);
 * assertEquals(isArray({}), false);
 * ```
 */
export const isArray = Array.isArray as (
  input: unknown,
) => input is readonly unknown[];
