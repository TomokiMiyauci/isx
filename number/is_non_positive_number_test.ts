import { isNonPositiveNumber } from "./is_non_positive_number.ts";
import { assert, assertFalse, describe, it } from "../_dev_deps.ts";

describe("isNonPositiveNumber", () => {
  it("should return true", () => {
    const table: number[] = [
      0,
      -0,
      -1,
      -0.1,
      -Infinity,
      Number.MIN_SAFE_INTEGER,
    ];

    table.forEach((input) => {
      assert(isNonPositiveNumber(input));
    });
  });

  it("should return false", () => {
    const table: number[] = [
      NaN,
      Infinity,
      0.1,
      1,
      Number.MAX_VALUE,
      Number.MAX_SAFE_INTEGER,
    ];

    table.forEach((input) => {
      assertFalse(isNonPositiveNumber(input));
    });
  });
});
