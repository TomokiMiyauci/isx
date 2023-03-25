// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isNull } from "./is_null.ts";
import { isUndefined } from "./is_undefined.ts";

/** Whether the input is `null` or `undefined` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isNullable } from "https://deno.land/x/isx@$VERSION/is_nullable.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isNullable(null), true)
 * assertEquals(isNullable(undefined), true)
 * assertEquals(isNullable({}), false)
 * ```
 */
export function isNullable(input: unknown): input is null | undefined {
  return isNull(input) || isUndefined(input);
}
