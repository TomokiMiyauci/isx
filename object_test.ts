import { hasOwn } from "./object.ts";
import { assertEquals, describe, it } from "./dev_deps.ts";

describe("hasOwn", () => {
  it("should return true when the value has property as own", () => {
    assertEquals(hasOwn("", { "": "" }), true);
  });

  it("should return false when the value has not property as own", () => {
    assertEquals(hasOwn("", {}), false);
    assertEquals(hasOwn("toString", {}), false);
  });
});
