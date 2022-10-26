/** Whether the value is odd or not.
 * @param value - Any `number`.
 * @example
 * ```ts
 * import { isOdd } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isOdd(1), true)
 * assertEquals(isOdd(0), false)
 * ```
 */
export function isOdd(value: number): boolean {
  return Math.abs(value) % 2 === 1;
}

/** Whether the value is even or not.
 * @param value - Any `number`.
 * @example
 * ```ts
 * import { isEven } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isEven(0), true)
 * assertEquals(isEven(1), false)
 * ```
 */
export function isEven(value: number): boolean {
  return Math.abs(value) % 2 === 0;
}

/** Whether the value is positive number or not.
 * @param value - Any `number`.
 * @example
 * ```ts
 * import { isPositiveNumber } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isPositiveNumber(1), true)
 * assertEquals(isPositiveNumber(0), false)
 * ```
 */
export function isPositiveNumber(value: number): boolean {
  return Number.isFinite(value) && value > 0;
}

/** Whether the value is negative number or not.
 * @param value - Any `number`.
 * @example
 * ```ts
 * import { isNegativeNumber } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isNegativeNumber(-1), true)
 * assertEquals(isNegativeNumber(0), false)
 * ```
 */
export function isNegativeNumber(value: number): boolean {
  return Number.isFinite(value) && value < 0;
}

/** Whether the value is non negative integer or not.
 * @param value - Any `number`.
 * @example
 * ```ts
 * import { isNonNegativeInteger } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isNonNegativeInteger(0), true)
 * assertEquals(isNonNegativeInteger(1.0), true)
 * assertEquals(isNonNegativeInteger(-1), false)
 * ```
 */
export function isNonNegativeInteger(value: number): boolean {
  return Number.isInteger(value) && value >= 0;
}
