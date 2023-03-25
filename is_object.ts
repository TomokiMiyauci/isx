// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isNull } from "./is_null.ts";

/** Whether the input is `object` or not.
 * @param input - Any input.
 *
 * ```ts
 * import { isObject } from "https://deno.land/x/isx@$VERSION/is_object.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isObject({}), true)
 * assertEquals(isObject(null), false)
 * ```
 */
export function isObject(input: unknown): input is object {
  return typeof input === "object" && !isNull(input);
}
