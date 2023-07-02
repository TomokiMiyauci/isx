// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `RegExp` of not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isRegExp } from "https://deno.land/x/isx@$VERSION/is_reg_exp.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 * assertEquals(isRegExp(new RegExp("")), true);
 * assertEquals(isRegExp({}), false);
 * ```
 */
export function isRegExp(input: unknown): input is RegExp {
  return input instanceof RegExp;
}
