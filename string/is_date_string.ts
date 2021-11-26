/** Whatever argument is date format string or not
 * ```ts
 * isDateString("2021-12-31T15:00:00.000Z") // true
 * isDateString("2022/1/1") // true
 * isDateString("invalid date") // false
 * ```
 *
 * @beta
 */
function isDateString(value: string): boolean {
  return !isNaN(Date.parse(value));
}

export { isDateString };
