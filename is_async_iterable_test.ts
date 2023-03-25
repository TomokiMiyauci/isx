import { isAsyncIterable } from "./is_async_iterable.ts";
import { assertEquals } from "./_dev_deps.ts";

Deno.test({
  name: "isAsyncIterable",
  fn: () => {
    async function* asyncGen() {}

    const table: [
      ...Parameters<typeof isAsyncIterable>,
      ReturnType<typeof isAsyncIterable>,
    ][] = [
      [false, false],
      [{}, false],
      [[], false],
      ["", false],
      [{
        [Symbol.asyncIterator]: 1,
      }, false],
      [{
        async *[Symbol.asyncIterator]() {},
      }, true],
      [{
        async [Symbol.asyncIterator]() {},
        next: () => {},
        return: () => {},
        throw: () => {},
      }, true],
      [asyncGen(), true],
    ];

    table.forEach(([input, result]) =>
      assertEquals(isAsyncIterable(input), result)
    );
  },
});
