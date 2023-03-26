import { isPositiveNumber } from "./is_positive_number.ts";
import { numbers } from "./_fixture.ts";
import { assertEquals } from "../_dev_deps.ts";

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
      (input) => assertEquals(isPositiveNumber(input), true, String(input)),
    ),
});
