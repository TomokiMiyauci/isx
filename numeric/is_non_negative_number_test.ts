import { isNonNegativeNumber } from "./is_non_negative_number.ts";
import { assert, assertFalse, describe, it } from "../_dev_deps.ts";

describe("isNonNegativeNumber", () => {
  it("should return true", () => {
    const table: (number | bigint)[] = [
      0,
      -0,
      Infinity,
      1,
      1.1,
      Number.MAX_VALUE,
      Number.MAX_SAFE_INTEGER,
      1n,
      0n,
      -0n,
    ];

    table.forEach((input) => {
      assert(isNonNegativeNumber(input));
    });
  });

  it("should return false", () => {
    const table: (number | bigint)[] = [
      NaN,
      -1,
      -1.1,
      -Infinity,
      Number.MIN_SAFE_INTEGER,
      -1n,
    ];

    table.forEach((input) => {
      assertFalse(isNonNegativeNumber(input));
    });
  });
});
