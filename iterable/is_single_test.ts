import { isSingle } from "./is_single.ts";
import { assert, assertFalse, describe, it } from "../_dev_deps.ts";

describe("isSingle", () => {
  it("should return true if the array is single element", () => {
    assert(isSingle([0]));
    assert(isSingle([""]));
  });

  it("should return false if the array is not single element", () => {
    assertFalse(isSingle([]));
    assertFalse(isSingle([0, 1]));
    assertFalse(isSingle([[], [], []]));
  });

  it("should return true if the iterable is single element", () => {
    assert(isSingle(" "));
    assert(isSingle("a"));
    assert(isSingle(new Set([""])));
  });

  it("should return false if the iterable is not single element", () => {
    assertFalse(isSingle(""));
    assertFalse(isSingle("ab"));
    assertFalse(isSingle("abc"));
    assertFalse(isSingle(new Set()));
    assertFalse(isSingle(new Set([1, 2, 3])));
  });
});
