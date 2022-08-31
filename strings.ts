/** Whether the value is Hex color or not.
 * @param value - Any `string`.
 * ```ts
 * import { isHexColorFormat } from "https://deno.land/x/isx@$VERSION/mod.ts"
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts"
 * assertEquals(isHexColorFormat("#000000"), true)
 * assertEquals(isHexColorFormat("#FFF"), true)
 * assertEquals(isHexColorFormat("#ggg"), false)
 * ```
 */
export function isHexColorFormat(value: string): boolean {
  const hex3 = /^#[a-f\d]{3}$/i;
  const hex6 = /^#[a-f\d]{6}$/i;

  return hex3.test(value) || hex6.test(value);
}
