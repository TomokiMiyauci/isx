import { isNotEmpty } from "./is_not_empty.ts";
import { assert, assertFalse, describe, it } from "../_dev_deps.ts";

describe("isNotEmpty", () => {
  it("should return true if the array is not empty", () => {
    assert(isNotEmpty([0]));
    assert(isNotEmpty([0, 1, 2]));
    assert(isNotEmpty([[]]));
  });

  it("should return false if the array is empty", () => {
    assertFalse(isNotEmpty([]));
  });

  it("should return true if the iterable is not empty", () => {
    assert(isNotEmpty(" "));
    assert(isNotEmpty(new Set([""])));
  });

  it("should return false if the iterable is empty", () => {
    assertFalse(isNotEmpty(""));
    assertFalse(isNotEmpty(new Set()));
  });
});
