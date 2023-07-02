// Copyright © 2021 Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isObject } from "./is_object.ts";
import { isFunction } from "./is_function.ts";

/** Types for Primitive value. */
export type Primitive =
  | number
  | string
  | boolean
  | bigint
  | undefined
  | null
  | symbol;

/** Whether the input is {@link Primitive} or not.
 * @param input - Any input.
 * @example
 * ```ts
 * import { isPrimitive } from "https://deno.land/x/isx@$VERSION/is_primitive.ts"
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
 * assertEquals(isPrimitive(true), true)
 * assertEquals(isPrimitive(() => {}), false)
 * ```
 */
export function isPrimitive(input: unknown): input is Primitive {
  return !isObject(input) && !isFunction(input);
}
