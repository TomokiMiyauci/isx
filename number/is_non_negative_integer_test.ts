import { isNonNegativeInteger } from "./is_non_negative_integer.ts";
import { assert, assertFalse, describe, it } from "../_dev_deps.ts";

describe("isNonNegativeInteger", () => {
  it("should return true", () => {
    const table: number[] = [
      0,
      -0,
      1,
      1000,
      Number.MAX_SAFE_INTEGER,
      Number.MAX_VALUE,
    ];

    table.forEach((input) => {
      assert(isNonNegativeInteger(input));
    });
  });

  it("should return false", () => {
    const table: number[] = [
      NaN,
      0.1,
      -1,
      -0.1,
      Infinity,
      -Infinity,
      Number.NEGATIVE_INFINITY,
      Number.MIN_SAFE_INTEGER,
    ];

    table.forEach((input) => {
      assertFalse(isNonNegativeInteger(input));
    });
  });
});
