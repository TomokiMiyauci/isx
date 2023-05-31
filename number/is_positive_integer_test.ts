import { isPositiveInteger } from "./is_positive_integer.ts";
import { assert, assertFalse, describe, it } from "../_dev_deps.ts";

describe("isPositiveInteger", () => {
  it("should return true", () => {
    const table: number[] = [
      1,
      Number.MAX_VALUE,
      Number.MAX_SAFE_INTEGER,
    ];

    table.forEach((input) => {
      assert(isPositiveInteger(input));
    });
  });

  it("should return false", () => {
    const table: number[] = [
      NaN,
      0,
      -0,
      -1,
      -1.1,
      -Infinity,
      Infinity,
      1.1,
      Number.NEGATIVE_INFINITY,
      Number.MIN_SAFE_INTEGER,
    ];

    table.forEach((input) => {
      assertFalse(isPositiveInteger(input));
    });
  });
});
