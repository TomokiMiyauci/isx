<p align="center">
  <h1 align="center">validate.js</h1>
</p>

<p align="center">
TypeScript-first validate function collections
</p>

<div align="center">

[![test](https://github.com/TomokiMiyauci/isx/actions/workflows/test.yml/badge.svg)](https://github.com/TomokiMiyauci/isx/actions/workflows/test.yml)
[![GitHub release](https://img.shields.io/github/release/TomokiMiyauci/isx.svg)](https://github.com/TomokiMiyauci/isx/releases)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/isx/mod.ts)
![npm download](https://img.shields.io/npm/dw/isxx?color=blue)

![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/TomokiMiyauci/isx)
[![dependencies Status](https://status.david-dm.org/gh/TomokiMiyauci/isx.svg)](https://david-dm.org/TomokiMiyauci/isx)
[![codecov](https://codecov.io/gh/TomokiMiyauci/isx/branch/main/graph/badge.svg?token=SPAi5Pv2wd)](https://codecov.io/gh/TomokiMiyauci/isx)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f43b1c317e11445399d85ce6efc06504)](https://www.codacy.com/gh/TomokiMiyauci/isx/dashboard?utm_source=github.com&utm_medium=referral&utm_content=TomokiMiyauci/isx&utm_campaign=Badge_Grade)
![npm type definitions](https://img.shields.io/npm/types/lauqe)
![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat)
![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

</div>

## What

This is a very small collection of validate functions.

Some of them contain wrappers for `typeof` statements, which may be used to
reduce the number of repeated expressions and thus reduce the bundle size.

The validate function provides a custom type guard whenever it can.

## Naming rule

The validate function is provided according to the following naming conventions

- monadic - is`X`
- dyadic - equals`X`

## isString

Whether the value is `string` or not.

```ts
import { isString } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isString("hello world"), true);
assertEquals(isString(1000), false);
```

## isNumber

Whether the value is `number` or not.

```ts
import { isNumber } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNumber(1000), true);
assertEquals(isNumber("hello world"), false);
```

## isBigint

Whether the value is `bigint` or not.

```ts
import { isBigint } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isBigint(1000n), true);
assertEquals(isBigint(undefined), false);
```

## isNull

Whether the value is `null` or not.

```ts
import { isNull } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNull(null), true);
assertEquals(isNull(undefined), false);
```

## isUndefined

Whether the value is `undefined` or not.

```ts
import { isUndefined } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isUndefined(undefined), true);
assertEquals(isUndefined(null), false);
```

## isBoolean

Whether the value is `boolean` or not.

```ts
import { isBoolean } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isBoolean(true), true);
assertEquals(isBoolean(null), false);
```

## isFunction

Whether the value is `Function` or not.

```ts
import { isFunction } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isFunction(() => {}), true);
assertEquals(isFunction({}), false);
```

## isObject

Whether the value is `object` or not.

```ts
import { isObject } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isObject({}), true);
assertEquals(isObject(null), false);
```

## isSymbol

Whether the value is `symbol` or not.

```ts
import { isSymbol } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isSymbol(Symbol("symbol")), true);
assertEquals(isSymbol(null), false);
```

## isTruthy

Whether the value is `MaybeTruthy` or not.

```ts
import { isTruthy } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isTruthy(1), true);
assertEquals(isTruthy("a"), true);
assertEquals(isTruthy(0), false);
```

> Currently, there is no way to represent a type other than a specific subset
> from a type with an infinite subset, such as `string` or `number`.

```ts
type MaybeTruthy =
  | Exclude<string, "">
  | Exclude<number, 0 | -0>
  | Exclude<bigint, 0n>
  | Exclude<boolean, false>
  | symbol
  | object;
```

## isFalsy

Whether the value is `MaybeFalsy` or not.

```ts
import { isFalsy } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isFalsy(0), true);
assertEquals(isFalsy(""), true);
assertEquals(isFalsy("a"), false);
```

> `NaN` is not a Unit type, but a `number`.

```ts
type MaybeFalsy =
  | typeof NaN
  | 0
  | -0
  | 0n
  | ""
  | null
  | undefined
  | false;
```

## isTrue

Whether the value is `true` or not.

```ts
import { isTrue } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isTrue(true), true);
assertEquals(isTrue(false), false);
```

## isFalse

Whether the value is `false` or not.

```ts
import { isFalse } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isFalse(false), true);
assertEquals(isFalse(true), false);
```

## isPrimitive

Whether the value is `Primitive` or not.

```ts
import { isPrimitive } from "https://deno.land/x/isx@$VERSION/mod.ts";
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

Whether the value is `Promise` or not.

```ts
import { isPromise } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isPromise(Promise.resolve()), true);
assertEquals(isPromise({}), false);
```

## isDate

Whether the value is `Date` or not.

```ts
import { isDate } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isDate(new Date()), true);
assertEquals(isDate({}), false);
```

## isError

Whether the value is `Error` or not.

```ts
import { isError } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isError(Error()), true);
assertEquals(isError(new SyntaxError()), true);
assertEquals(isError(new Date()), false);
```

## isIterable

Whether the value is `Iterable` or not.

```ts
import { isIterable } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isIterable(""), true);
assertEquals(isIterable({}), false);
```

## Whether the value is `AsyncIterable` or not

```ts
import { isAsyncIterable } from "https://deno.land/x/isx@$VERSION/mod.ts";
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

### String subsets

Validates a subset of `string`. All validate functions must satisfy ⊂ `string`.

## isHexColorFormat

Whether the value is Hex color or not.

```ts
import { isHexColorFormat } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isHexColorFormat("#000000"), true);
assertEquals(isHexColorFormat("#FFF"), true);
assertEquals(isHexColorFormat("#ggg"), false);
```

### Number subsets

Validates a subset of `number`. All validate functions must satisfy ⊂ `number`.

### isOdd

Whether the value is odd or not.

```ts
import { isOdd } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isOdd(1), true);
assertEquals(isOdd(0), false);
```

### isEven

Whether the value is even or not.

```ts
import { isEven } from "https://deno.land/x/isx@$VERSION/number/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isEven(0), true);
assertEquals(isEven(1), false);
```

### isPositiveNumber

Whether the value is positive number or not.

```ts
import { isPositiveNumber } from "https://deno.land/x/isx@$VERSION/number/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isPositiveNumber(1), true);
assertEquals(isPositiveNumber(0), false);
```

### isNegativeNumber

Whether the value is negative number or not.

```ts
import { isNegativeNumber } from "https://deno.land/x/isx@$VERSION/number/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNegativeNumber(-1), true);
assertEquals(isNegativeNumber(0), false);
```

### isNonNegativeInteger

Whether the value is non negative integer or not.

```ts
import { isNonNegativeInteger } from "https://deno.land/x/isx@$VERSION/number/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNonNegativeInteger(0), true);
assertEquals(isNonNegativeInteger(1.0), true);
assertEquals(isNonNegativeInteger(-1), false);
```

## Date subsets

Validates a subset of `Date`. All validate functions must satisfy ⊂ `Date`.

### isValidDate

Whether the value is valid `Date` or not.

```ts
import { isValidDate } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isValidDate(new Date("2000/1/1")), true);
assertEquals(isValidDate(new Date("invalid")), false);
```

## License

Copyright © 2021-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license
