// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Whether the input is `symbol` or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isSymbol } from "https://deno.land/x/isx@$VERSION/is_symbol.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isSymbol(Symbol("symbol")), true)
 * assertEquals(isSymbol(null), false)
 * ```
 */
export function isSymbol(input: unknown): input is symbol {
  return typeof input === "symbol";
}
