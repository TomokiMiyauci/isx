/** Whatever argument is Hex color of 3 or 6 digits format or not
 * ```ts
 * isHexColor("#000000") // true
 * isHexColor("#FFF") // true
 * isHexColor("#ggg") // false
 * ```
 * @beta
 */
function isHexColor(value: string): boolean {
  const hex3 = /^#[a-f\d]{3}$/i;
  const hex6 = /^#[a-f\d]{6}$/i;

  return hex3.test(value) || hex6.test(value);
}

export { isHexColor };
