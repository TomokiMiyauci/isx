import { isNegativeNumber } from "./is_negative_number.ts";
import { numbers } from "./_fixture.ts";
import { assertEquals } from "../_dev_deps.ts";

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
      (input) => assertEquals(isNegativeNumber(input), true),
    ),
});
