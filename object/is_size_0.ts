/** Whatever argument size property is `0` or not
 * ```ts
 * isSize0(new Map()) // true
 * isSize0({ size: 1 }) // false
 * ```
 * @beta
 */
function isSize0(value: { size: unknown }): boolean {
  return value.size === 0;
}

function hasSize(value: object): value is { size: unknown } {
  return "size" in value;
}

export { hasSize, isSize0 };
