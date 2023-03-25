import { isValidDate } from "./is_valid_date.ts";
import { assert } from "../_dev_deps.ts";

Deno.test({
  name: "isValidDate",
  fn: () => {
    assert(isValidDate(new Date("2000/1/1")));
    assert(!isValidDate(new Date("invalid")));
  },
});
