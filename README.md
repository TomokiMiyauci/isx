<p align="center">
  <h1 align="center">isx</h1>
</p>

<p align="center">
TypeScript-first validate collections for JavaScript data.
</p>

<div align="center">

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/isx)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/isx/mod.ts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

</div>

## What

This is a very small collection of validate functions. The validate function
provides a custom type guard whenever it can.

## Naming rule

The validate function is provided according to the following naming conventions

- monadic - is`X`

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

## isNullable

Whether the value is `null` or `undefined` or not.

```ts
import { isNullable } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNullable(null), true);
assertEquals(isNullable(undefined), true);
assertEquals(isNullable({}), false);
```

## isNonNullable

Whether the value is non-nullable or not.

```ts
import { isNonNullable } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNonNullable({}), true);
assertEquals(isNonNullable(null), false);
assertEquals(isNonNullable(undefined), false);
```

## isTruthy

Whether the value is `TruthyLike` or not.

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
type TruthyLike =
  | Exclude<string, "">
  | Exclude<number, 0 | -0>
  | Exclude<bigint, 0n>
  | Exclude<boolean, false>
  | symbol
  | object;
```

## isFalsy

Whether the value is `FalsyLike` or not.

```ts
import { isFalsy } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isFalsy(0), true);
assertEquals(isFalsy(""), true);
assertEquals(isFalsy("a"), false);
```

> `NaN` is not a Unit type, but a `number`.

```ts
type FalsyLike =
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

## isAsyncIterable

Whether the value is `AsyncIterable` or not.

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

## isRegExp

Whether the value is `RegExp` of not.

```ts
import { isRegExp } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isRegExp(new RegExp("")), true);
assertEquals(isRegExp({}), false);
```

## isEmptyObject

Whether the value is empty object or not.

```ts
import { isEmptyObject } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isEmptyObject({}), true);
assertEquals(isEmptyObject({ a: "b" }), false);
assertEquals(isEmptyObject([]), false);
```

## String subsets

Validates a subset of `string`. All validate functions must satisfy ⊂ `string`.

### isHexColorFormat

Whether the value is Hex color or not.

```ts
import { isHexColorFormat } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isHexColorFormat("#000000"), true);
assertEquals(isHexColorFormat("#FFF"), true);
assertEquals(isHexColorFormat("#ggg"), false);
```

### isHostnameFormat

Whether the value is hostname format or not.

```ts
import { isHostnameFormat } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isHostnameFormat("a"), true);
assertEquals(isHostnameFormat("test.test"), true);
assertEquals(isHostnameFormat("."), false);
```

### isRfc3339DateFormat

Whether the value is RFC 3339 date format or not.

The format compliant with
[RFC 3339, 5.6. Internet Date/Time Format, full-date](https://www.rfc-editor.org/rfc/rfc3339#section-5.6)

```ts
import { isRfc3339DateFormat } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isRfc3339DateFormat("0000-01-01"), true);
assertEquals(isRfc3339DateFormat("0000-00-00"), false);
```

### isRfc3339TimeFormat

Whether the value is RFC 3339 time format or not.

The format compliant with
[RFC 3339, 5.6. Internet Date/Time Format, full-time](https://www.rfc-editor.org/rfc/rfc3339#section-5.6)

```ts
import { isRfc3339TimeFormat } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isRfc3339TimeFormat("00:00:00+00:00"), true);
assertEquals(isRfc3339TimeFormat("23:59:59Z"), true);
assertEquals(isRfc3339TimeFormat("24:00:00Z"), false);
```

### isRfc3339DateTimeFormat

Whether the value is RFC 3339 date time format or not.

The format compliant with
[RFC 3339, 5.6. Internet Date/Time Format, date-time](https://www.rfc-editor.org/rfc/rfc3339#section-5.6)

```ts
import { isRfc3339DateTimeFormat } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isRfc3339DateTimeFormat("0001-01-01T00:00:00Z"), true);
assertEquals(isRfc3339DateTimeFormat("9999-12-31T23:59:59+19:59"), true);
assertEquals(isRfc3339DateTimeFormat("0000-00-00T00:00:00Z"), false);
```

## Number subsets

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
import { isEven } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isEven(0), true);
assertEquals(isEven(1), false);
```

### isPositiveNumber

Whether the value is positive number or not.

```ts
import { isPositiveNumber } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isPositiveNumber(1), true);
assertEquals(isPositiveNumber(0), false);
```

### isNegativeNumber

Whether the value is negative number or not.

```ts
import { isNegativeNumber } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNegativeNumber(-1), true);
assertEquals(isNegativeNumber(0), false);
```

### isNonNegativeInteger

Whether the value is non negative integer or not.

```ts
import { isNonNegativeInteger } from "https://deno.land/x/isx@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
assertEquals(isNonNegativeInteger(0), true);
assertEquals(isNonNegativeInteger(1.0), true);
assertEquals(isNonNegativeInteger(-1), false);
```

## Object subsets

Validates a subset of `object`. All validate functions must satisfy ⊂ `object`.

### hasOwn

Whether the value own the property or not. The difference from `Object.hasOwn`
is that it has a Type guard.

```ts
import { hasOwn } from "https://deno.land/x/isx@$VERSION/mod.ts";

const object: object = {};
if (hasOwn("", object)) {
  object[""]; // No type error.
}
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
