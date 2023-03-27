import { isEmpty } from "./is_empty.ts";
import { assert, assertFalse, describe, it } from "../_dev_deps.ts";

describe("isEmpty", () => {
  it("should return true if the string is empty", () => {
    assert(isEmpty(""));
  });

  it("should return false if the string is not empty", () => {
    assertFalse(isEmpty("a"));
    assertFalse(isEmpty("   "));
  });

  it("should return true if the array is empty", () => {
    assert(isEmpty([]));
  });

  it("should return false if the array is not empty", () => {
    assertFalse(isEmpty([""]));
    assertFalse(isEmpty([0, 1, 2]));
    assertFalse(isEmpty([[]]));
  });

  it("should return true if the iterable is empty", () => {
    assert(isEmpty(new Set()));
    assert(isEmpty(new Map()));
  });

  it("should return false if the array is not empty", () => {
    assertFalse(isEmpty(new Set([0])));
    assertFalse(isEmpty(new Map([[0, 1]])));
  });
});
