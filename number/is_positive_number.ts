/** Whatever argument is positive number or not
 * ```ts
 * isPositiveNumber(1) // true
 * isPositiveNumber(0) // false
 * ```
 * @beta
 */
function isPositiveNumber(value: number): boolean {
  return Number.isFinite(value) && value > 0;
}

export { isPositiveNumber };
