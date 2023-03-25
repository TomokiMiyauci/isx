import { isEven } from "./is_even.ts";
import { numbers } from "./_fixture.ts";
import { assertEquals } from "../_dev_deps.ts";

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
      (input) => assertEquals(isEven(input), true, String(input)),
    ),
});
