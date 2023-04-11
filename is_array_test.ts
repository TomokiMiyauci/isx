import { assert, assertType, describe, IsExact, it } from "./_dev_deps.ts";
import { isArray } from "./is_array.ts";

describe("isArray", () => {
  it("should same Array.isArray", () => {
    assert(Object.is(Array.isArray, isArray));
  });

  it("should infer readonly unknown array", () => {
    let input: unknown;

    if (isArray(input)) {
      assertType<IsExact<typeof input, readonly unknown[]>>(true);
    }
  });

  it("should narrow array", () => {
    const input: readonly [] | Record<string, unknown> = [];

    if (isArray(input)) {
      assertType<IsExact<typeof input, readonly []>>(true);
    }
  });
});
