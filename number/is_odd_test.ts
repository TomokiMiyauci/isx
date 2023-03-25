import { isOdd } from "./is_odd.ts";
import { numbers } from "./_fixture.ts";
import { assertEquals } from "../_dev_deps.ts";

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
      (input) => assertEquals(isOdd(input), true),
    ),
});
