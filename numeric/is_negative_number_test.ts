import { isNegativeNumber } from "./is_negative_number.ts";
import { assert, assertFalse, describe, it } from "../_dev_deps.ts";

describe("isNegativeNumber", () => {
  it("should return true", () => {
    const table: (number | bigint)[] = [
      -1,
      -0.1,
      -Infinity,
      Number.NEGATIVE_INFINITY,
      Number.MIN_SAFE_INTEGER,
      -1n,
    ];

    table.forEach((input) => {
      assert(isNegativeNumber(input));
    });
  });

  it("should return false", () => {
    const table: (number | bigint)[] = [
      NaN,
      0,
      -0,
      Infinity,
      0.1,
      1,
      Number.MAX_VALUE,
      Number.MAX_SAFE_INTEGER,
      0n,
      1n,
    ];

    table.forEach((input) => {
      assertFalse(isNegativeNumber(input));
    });
  });
});
