/** Whatever argument is even or not
 * ```ts
 * isEven(0) // true
 * isEven(1) // false
 * ```
 * @beta
 */
function isEven(value: number): boolean {
  return Math.abs(value) % 2 === 0;
}

export { isEven };
