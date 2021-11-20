/**
 * Whatever argument is type of `symbol` or not
 *
 * @param value - Input any value
 * @returns The result of `typeof value === "symbol"`
 *
 * @example
 * ```ts
 * import { isSymbol } from './mod.ts'
 * isSymbol(Symbol("symbol"))) // true
 * isSymbol(null)) // false
 * ```
 *
 * @beta
 */
function isSymbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}

export { isSymbol };
