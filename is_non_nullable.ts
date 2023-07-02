// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isNullable } from "./is_nullable.ts";

/** Whether the input is `NonNullable` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isNonNullable } from "https://deno.land/x/isx@$VERSION/is_non_nullable.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 * assertEquals(isNonNullable(""), true);
 * assertEquals(isNonNullable(null), false);
 * assertEquals(isNonNullable(undefined), false);
 * ```
 */
export function isNonNullable<T>(input: T): input is NonNullable<T> {
  return !isNullable(input);
}
