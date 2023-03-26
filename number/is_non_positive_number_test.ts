import { isNonPositiveNumber } from "./is_non_positive_number.ts";
import { numbers } from "./_fixture.ts";
import { assertEquals } from "../_dev_deps.ts";

Deno.test({
  name: "isNonPositiveNumber",
  fn: () =>
    numbers({
      real: {
        rational: {
          decimal: {
            negative: true,
          },
          integer: {
            zero: true,
            negative: true,
          },
        },
      },
    }).forEach(
      (input) => assertEquals(isNonPositiveNumber(input), true, String(input)),
    ),
});
