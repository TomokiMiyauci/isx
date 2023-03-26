import { isRegExp } from "./is_reg_exp.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test("isRegExp", () => {
  assertEquals(isRegExp(new RegExp("")), true);
  assertEquals(isRegExp({}), false);
});
