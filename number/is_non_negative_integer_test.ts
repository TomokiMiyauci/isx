import { isNonNegativeInteger } from "./is_non_negative_integer.ts";
import { numbers } from "./_fixture.ts";
import { assertEquals } from "../_dev_deps.ts";

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
      (input) => assertEquals(isNonNegativeInteger(input), true),
    );
  },
});
