/** Whether the value is valid `Date` or not.
 * @param value - Any `Date`.
 * ```ts
 * import { isValidDate } from "https://deno.land/x/isx@$VERSION/date/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isValidDate(new Date("2000/1/1")))
 * assertFalse(isValidDate(new Date("invalid")))
 * ```
 */
export function isValidDate(value: Date): boolean {
  return !Number.isNaN(value.getTime());
}
