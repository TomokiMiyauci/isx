/** Whatever argument is odd or not
 * ```ts
 * isOdd(1) // true
 * isOdd(0) // false
 * ```
 * @beta
 */
function isOdd(value: number): boolean {
  return Math.abs(value) % 2 === 1;
}

export { isOdd };
