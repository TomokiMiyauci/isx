/** Whether the value is odd or not.
 * @param value - Any `number`.
 * ```ts
 * import { isOdd } from "https://deno.land/x/isx@$VERSION/number/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isOdd(1))
 * assertFalse(isOdd(0))
 * ```
 */
export function isOdd(value: number): boolean {
  return Math.abs(value) % 2 === 1;
}

/** Whether the value is even or not.
 * @param value - Any `number`.
 * ```ts
 * import { isEven } from "https://deno.land/x/isx@$VERSION/number/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isEven(0))
 * assertFalse(isEven(1))
 * ```
 */
export function isEven(value: number): boolean {
  return Math.abs(value) % 2 === 0;
}

/** Whether the value is positive number or not.
 * @param value - Any `number`.
 * ```ts
 * import { isPositiveNumber } from "https://deno.land/x/isx@$VERSION/number/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isPositiveNumber(1))
 * assertFalse(isPositiveNumber(0))
 * ```
 */
export function isPositiveNumber(value: number): boolean {
  return Number.isFinite(value) && value > 0;
}

/** Whether the value is negative number or not.
 * @param value - Any `number`.
 * ```ts
 * import { isNegativeNumber } from "https://deno.land/x/isx@$VERSION/number/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isNegativeNumber(-1))
 * assertFalse(isEven(0))
 * ```
 */
export function isNegativeNumber(value: number): boolean {
  return Number.isFinite(value) && value < 0;
}
