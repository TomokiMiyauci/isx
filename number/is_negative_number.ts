/** Whatever argument is negative number or not
 * ```ts
 * isNegativeNumber(-1) // true
 * isNegativeNumber(0) // false
 * ```
 * @beta
 */
function isNegativeNumber(value: number): boolean {
  return Number.isFinite(value) && value < 0;
}

export { isNegativeNumber };
