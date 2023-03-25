# isx

TypeScript-first validate collections for JavaScript data.

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/isx)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/isx/mod.ts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## What

This is a very small collection of validate functions. The validate function
provides a custom type guard whenever it can.

There is no single entry point such as `mod`.

This prevents the inclusion of many unnecessary modules.

## isString

Whether the input is `string` or not.

```ts
import { isString } from "https://deno.land/x/isx@$VERSION/is_string.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isString("hello world"), true);
assertEquals(isString(1000), false);
```

## isNumber

Whether the input is `number` or not.

```ts
import { isNumber } from "https://deno.land/x/isx@$VERSION/is_number.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNumber(1000), true);
assertEquals(isNumber("hello world"), false);
```

## isBigint

Whether the input is `bigint` or not.

```ts
import { isBigint } from "https://deno.land/x/isx@$VERSION/is_bigint.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isBigint(1000n), true);
assertEquals(isBigint(undefined), false);
```

## isNull

Whether the input is `null` or not.

```ts
import { isNull } from "https://deno.land/x/isx@$VERSION/is_null.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNull(null), true);
assertEquals(isNull(undefined), false);
```

## isUndefined

Whether the input is `undefined` or not.

```ts
import { isUndefined } from "https://deno.land/x/isx@$VERSION/is_undefined.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isUndefined(undefined), true);
assertEquals(isUndefined(null), false);
```

## isBoolean

Whether the input is `boolean` or not.

```ts
import { isBoolean } from "https://deno.land/x/isx@$VERSION/is_boolean.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isBoolean(true), true);
assertEquals(isBoolean(null), false);
```

## isFunction

Whether the input is `Function` or not.

```ts
import { isFunction } from "https://deno.land/x/isx@$VERSION/is_function.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isFunction(() => {}), true);
assertEquals(isFunction({}), false);
```

## isObject

Whether the input is `object` or not.

```ts
import { isObject } from "https://deno.land/x/isx@$VERSION/is_object.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isObject({}), true);
assertEquals(isObject(null), false);
```

## isSymbol

Whether the input is `symbol` or not.

```ts
import { isSymbol } from "https://deno.land/x/isx@$VERSION/is_symbol.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isSymbol(Symbol("symbol")), true);
assertEquals(isSymbol(null), false);
```

## isNullable

Whether the input is `null` or `undefined` or not.

```ts
import { isNullable } from "https://deno.land/x/isx@$VERSION/is_nullable.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNullable(null), true);
assertEquals(isNullable(undefined), true);
assertEquals(isNullable({}), false);
```

## isPrimitive

Whether the input is `Primitive` or not.

```ts
import { isPrimitive } from "https://deno.land/x/isx@$VERSION/is_primitive.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isPrimitive(true), true);
assertEquals(isPrimitive(() => {}), false);
```

```ts
type Primitive =
  | number
  | string
  | boolean
  | bigint
  | undefined
  | null
  | symbol;
```

## isPromise

Whether the input is `Promise` or not.

```ts
import { isPromise } from "https://deno.land/x/isx@$VERSION/is_promise.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isPromise(Promise.resolve()), true);
assertEquals(isPromise({}), false);
```

## isDate

Whether the input is `Date` or not.

```ts
import { isDate } from "https://deno.land/x/isx@$VERSION/is_date.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isDate(new Date()), true);
assertEquals(isDate({}), false);
```

## isError

Whether the input is `Error` or not.

```ts
import { isError } from "https://deno.land/x/isx@$VERSION/is_error.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isError(Error()), true);
assertEquals(isError(new SyntaxError()), true);
assertEquals(isError(new Date()), false);
```

## isIterable

Whether the input is `Iterable` or not.

```ts
import { isIterable } from "https://deno.land/x/isx@$VERSION/is_iterable.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isIterable(""), true);
assertEquals(isIterable({}), false);
```

## isAsyncIterable

Whether the input is `AsyncIterable` or not.

```ts
import { isAsyncIterable } from "https://deno.land/x/isx@$VERSION/is_async_iterable.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(
  isAsyncIterable({
    async *[Symbol.asyncIterator]() {
      yield "hello";
    },
  }),
  true,
);
assertEquals(isAsyncIterable(() => {}), false);
```

## isRegExp

Whether the input is `RegExp` of not.

```ts
import { isRegExp } from "https://deno.land/x/isx@$VERSION/is_reg_exp.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isRegExp(new RegExp("")), true);
assertEquals(isRegExp({}), false);
```

## Number subsets

Validates a subset of `number`. All validate functions must satisfy ⊂ `number`.

### isOdd

Whether the input is odd or not.

```ts
import { isOdd } from "https://deno.land/x/isx@$VERSION/number/is_odd.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isOdd(1), true);
assertEquals(isOdd(0), false);
```

### isEven

Whether the input is even or not.

```ts
import { isEven } from "https://deno.land/x/isx@$VERSION/number/is_even.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isEven(0), true);
assertEquals(isEven(1), false);
```

### isPositiveNumber

Whether the input is positive number or not.

```ts
import { isPositiveNumber } from "https://deno.land/x/isx@$VERSION/number/is_positive_number.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isPositiveNumber(1), true);
assertEquals(isPositiveNumber(0), false);
```

### isNonPositiveNumber

Whether the input is non-positive number or not. Non-positive number means less
than or equal to zero.

```ts
import { isNonPositiveNumber } from "https://deno.land/x/isx@$VERSION/number/is_non_positive_number.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNonPositiveNumber(0), true);
assertEquals(isNonPositiveNumber(-1), true);
assertEquals(isNonPositiveNumber(1), false);
```

### isNegativeNumber

Whether the input is negative number or not.

```ts
import { isNegativeNumber } from "https://deno.land/x/isx@$VERSION/number/is_negative_number.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNegativeNumber(-1), true);
assertEquals(isNegativeNumber(0), false);
```

### isNonNegativeNumber

Whether the input is non-negative number or not. Non-negative number means
greater than or equal to zero.

```ts
import { isNonNegativeNumber } from "https://deno.land/x/isx@$VERSION/number/is_non_negative_number.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNonNegativeNumber(0), true);
assertEquals(isNonNegativeNumber(1), true);
assertEquals(isNonNegativeNumber(-1), false);
```

### isNonNegativeInteger

Whether the input is non negative integer or not.

```ts
import { isNonNegativeInteger } from "https://deno.land/x/isx@$VERSION/number/is_non_negative_integer.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNonNegativeInteger(0), true);
assertEquals(isNonNegativeInteger(1.0), true);
assertEquals(isNonNegativeInteger(-1), false);
```

## Date subsets

Validates a subset of `Date`. All validate functions must satisfy ⊂ `Date`.

### isValidDate

Whether the input is valid `Date` or not.

```ts
import { isValidDate } from "https://deno.land/x/isx@$VERSION/date/is_valid_date.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isValidDate(new Date("2000/1/1")), true);
assertEquals(isValidDate(new Date("invalid")), false);
```

## License

Copyright © 2021-present [Tomoki Miyauchi](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license
