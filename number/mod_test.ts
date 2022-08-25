import {
  isEven,
  isNegativeNumber,
  isNonNegativeInteger,
  isOdd,
  isPositiveNumber,
} from "./mod.ts";
import { numbers } from "../tests/number.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test({
  name: "isOdd",
  fn: () =>
    numbers({
      real: {
        rational: {
          integer: {
            negative: true,
            positive: true,
          },
        },
      },
    }).forEach(
      (value) => assertEquals(isOdd(value), true),
    ),
});

Deno.test({
  name: "isEven",
  fn: () =>
    numbers({
      real: {
        rational: {
          integer: {
            zero: true,
          },
        },
      },
    }).forEach(
      (value) => assertEquals(isEven(value), true, String(value)),
    ),
});

Deno.test({
  name: "isPositiveNumber",
  fn: () =>
    numbers({
      real: {
        rational: {
          decimal: {
            "positive": true,
          },
          "integer": {
            "positive": true,
          },
        },
      },
    }).forEach(
      (value) => assertEquals(isPositiveNumber(value), true, String(value)),
    ),
});

Deno.test({
  name: "isNegativeNumber",
  fn: () =>
    numbers({
      real: {
        rational: {
          "decimal": { negative: true },

          "integer": {
            "negative": true,
          },
        },
      },
    }).forEach(
      (value) => assertEquals(isNegativeNumber(value), true),
    ),
});

Deno.test({
  name: "isNegativeNumber",
  fn: () =>
    numbers({
      real: {
        rational: {
          "decimal": { negative: true },

          "integer": {
            "negative": true,
          },
        },
      },
    }).forEach(
      (value) => assertEquals(isNegativeNumber(value), true),
    ),
});

Deno.test({
  name: "isNonNegativeInteger",
  fn: () => {
    numbers({
      real: {
        rational: {
          "integer": {
            zero: true,
            positive: true,
          },
        },
      },
    }).forEach(
      (value) => assertEquals(isNonNegativeInteger(value), true),
    );
  },
});
