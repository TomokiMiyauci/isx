/** Whether the value is valid `Date` or not.
 * @param value - Any `Date`
 * @example
 * ```ts
 * import { isValidDate } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isValidDate(new Date("2000/1/1")), true)
 * assertEquals(isValidDate(new Date("invalid")), false)
 * ```
 */
export function isValidDate(value: Date): boolean {
  return !Number.isNaN(value.getTime());
}
