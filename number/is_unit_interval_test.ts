import { isUnitInterval } from "./is_unit_interval.ts";
import { assert, assertFalse, describe, it } from "../_dev_deps.ts";

describe("isUnitInterval", () => {
  it("should return false if the input is not unit interval", () => {
    const table: number[] = [
      NaN,
      Infinity,
      -Infinity,
      -1,
      -1.1,
      1.1,
      100,
      -100,
      Number.MAX_SAFE_INTEGER,
      Number.MIN_SAFE_INTEGER,
    ];

    table.forEach((input) => {
      assertFalse(isUnitInterval(input));
    });
  });

  it("should return true if the input is unit interval", () => {
    const table: number[] = [
      0,
      -0,
      1,
      1.0,
      0.1,
      0.9,
      0.01,
      0.09,
      0.999999999999999,
      0.000000000000001,
    ];

    table.forEach((input) => {
      assert(isUnitInterval(input));
    });
  });
});
