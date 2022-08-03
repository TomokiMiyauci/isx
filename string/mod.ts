/** Whether the value is Date format or not.
 * @param value - Any `string`.
 * ```ts
 * import { isDateFormat } from "https://deno.land/x/isx@$VERSION/string/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isDateFormat("2021-12-31T15:00:00.000Z"))
 * assertTrue(isDateFormat("2022/1/1"))
 * assertFalse(isDateFormat("invalid date"))
 * ```
 */
export function isDateFormat(value: string): boolean {
  return !isNaN(Date.parse(value));
}

/** Whether the value is Hex color or not.
 * @param value - Any `string`.
 * ```ts
 * import { isHexColor } from "https://deno.land/x/isx@$VERSION/string/mod.ts"
 * import { assertFalse, assertTrue } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertTrue(isHexColor("#000000"))
 * assertTrue(isHexColor("#FFF"))
 * assertFalse(isHexColor("#ggg"))
 * ```
 */
export function isHexColor(value: string): boolean {
  const hex3 = /^#[a-f\d]{3}$/i;
  const hex6 = /^#[a-f\d]{6}$/i;

  return hex3.test(value) || hex6.test(value);
}
