# isx

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/isx)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/TomokiMiyauci/isx)](https://github.com/TomokiMiyauci/isx/releases)
[![codecov](https://codecov.io/github/TomokiMiyauci/isx/branch/main/graph/badge.svg)](https://codecov.io/gh/TomokiMiyauci/isx)
[![GitHub](https://img.shields.io/github/license/TomokiMiyauci/isx)](https://github.com/TomokiMiyauci/isx/blob/main/LICENSE)

[![test](https://github.com/TomokiMiyauci/isx/actions/workflows/test.yaml/badge.svg)](https://github.com/TomokiMiyauci/isx/actions/workflows/test.yaml)
[![NPM](https://nodei.co/npm/@miyauci/isx.png?mini=true)](https://nodei.co/npm/@miyauci/isx/)

Collection of validation functions for JavaScript data.

This is a very small collection of validate functions. It provides a custom type
guard whenever it can.

## Module structure and capability

Module can be divided into two categories.

- [Top-type module](#top-type-module)
- [Sub-type module](#sub-type-module)

### Top-type module

Top-type module can accept any JavaScript data. In other words, it accepts the
`unknown` type, which is top-type.

Most of them can be used to identify the type by a type guard.

The module directly under namespace is it.

### Sub-type module

Sub-type modules are modules that perform type-dependent operations. It can use
type-specific methods and compare values.

For example, the module under `number` is a sub-type module that takes a
`number` type as an argument.

## isString

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_string.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_string.ts)

Whether the input is `string` or not.

```ts
import { isString } from "https://deno.land/x/isx@$VERSION/is_string.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isString("hello world"), true);
assertEquals(isString(1000), false);
```

## isNumber

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_number.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_number.ts)

Whether the input is `number` or not.

```ts
import { isNumber } from "https://deno.land/x/isx@$VERSION/is_number.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isNumber(1000), true);
assertEquals(isNumber("hello world"), false);
```

## isBigint

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_bigint.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_bigint.ts)

Whether the input is `bigint` or not.

```ts
import { isBigint } from "https://deno.land/x/isx@$VERSION/is_bigint.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isBigint(1000n), true);
assertEquals(isBigint(undefined), false);
```

## isNull

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_null.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_null.ts)

Whether the input is `null` or not.

```ts
import { isNull } from "https://deno.land/x/isx@$VERSION/is_null.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isNull(null), true);
assertEquals(isNull(undefined), false);
```

## isUndefined

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_undefined.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_undefined.ts)

Whether the input is `undefined` or not.

```ts
import { isUndefined } from "https://deno.land/x/isx@$VERSION/is_undefined.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isUndefined(undefined), true);
assertEquals(isUndefined(null), false);
```

## isBoolean

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_boolean.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_boolean.ts)

Whether the input is `boolean` or not.

```ts
import { isBoolean } from "https://deno.land/x/isx@$VERSION/is_boolean.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isBoolean(true), true);
assertEquals(isBoolean(null), false);
```

## isFunction

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_function.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_function.ts)

Whether the input is `Function` or not.

```ts
import { isFunction } from "https://deno.land/x/isx@$VERSION/is_function.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isFunction(() => {}), true);
assertEquals(isFunction({}), false);
```

## isObject

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_object.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_object.ts)

Whether the input is `object` or not.

```ts
import { isObject } from "https://deno.land/x/isx@$VERSION/is_object.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isObject({}), true);
assertEquals(isObject(null), false);
```

## isSymbol

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_symbol.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_symbol.ts)

Whether the input is `symbol` or not.

```ts
import { isSymbol } from "https://deno.land/x/isx@$VERSION/is_symbol.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isSymbol(Symbol("symbol")), true);
assertEquals(isSymbol(null), false);
```

## isNullable

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_nullable.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_nullable.ts)

Whether the input is `null` or `undefined` or not.

```ts
import { isNullable } from "https://deno.land/x/isx@$VERSION/is_nullable.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isNullable(null), true);
assertEquals(isNullable(undefined), true);
assertEquals(isNullable({}), false);
```

## isPrimitive

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_primitive.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_primitive.ts)

Whether the input is `Primitive` or not.

```ts
import { isPrimitive } from "https://deno.land/x/isx@$VERSION/is_primitive.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
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

## isArray

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_array.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_array.ts)

Whether the input is array or not.

_**Use only if input contains `ReadOnlyArray`**_. It improves type inference.
Otherwise, use `Array.isArray`.

This exists only because of TypeScript bug
[#17002](https://github.com/microsoft/TypeScript/issues/17002). When this is
fixed, this function will no longer be provided.

```ts
import { isArray } from "https://deno.land/x/isx@$VERSION/is_array.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isArray([]), true);
assertEquals(isArray({}), false);
```

## isPromise

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_promise.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_promise.ts)

Whether the input is `Promise` or not.

```ts
import { isPromise } from "https://deno.land/x/isx@$VERSION/is_promise.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isPromise(Promise.resolve()), true);
assertEquals(isPromise({}), false);
```

## isDate

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_date.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_date.ts)

Whether the input is `Date` or not.

```ts
import { isDate } from "https://deno.land/x/isx@$VERSION/is_date.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isDate(new Date()), true);
assertEquals(isDate({}), false);
```

## isError

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_error.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_error.ts)

Whether the input is `Error` or not.

```ts
import { isError } from "https://deno.land/x/isx@$VERSION/is_error.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isError(Error()), true);
assertEquals(isError(new SyntaxError()), true);
assertEquals(isError(new Date()), false);
```

## isNonNullable

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_non_nullable.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_non_nullable.ts)

Whether the input is `NonNullable` or not.

```ts
import { isNonNullable } from "https://deno.land/x/isx@$VERSION/is_non_nullable.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isNonNullable(""), true);
assertEquals(isNonNullable(null), false);
assertEquals(isNonNullable(undefined), false);
```

## isRegExp

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/is_reg_exp.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_reg_exp.ts)

Whether the input is `RegExp` of not.

```ts
import { isRegExp } from "https://deno.land/x/isx@$VERSION/is_reg_exp.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isRegExp(new RegExp("")), true);
assertEquals(isRegExp({}), false);
```

## Numeric subtypes

Validates a subtype of `number` or `bigint`.

### isPositiveNumber

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/numeric/is_positive_number.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fnumeric%2Fis_positive_number.ts)

Whether the input is positive number or not.

```ts
import { isPositiveNumber } from "https://deno.land/x/isx@$VERSION/numeric/is_positive_number.ts";
import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
assert(isPositiveNumber(1));
assert(isPositiveNumber(Infinity));
assertFalse(isPositiveNumber(0));
```

### isNonPositiveNumber

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/numeric/is_non_positive_number.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fnumeric%2Fis_non_positive_number.ts)

Whether the input is non-positive number or not. Non-positive number means less
than or equal to zero.

```ts
import { isNonPositiveNumber } from "https://deno.land/x/isx@$VERSION/numeric/is_non_positive_number.ts";
import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
assert(isNonPositiveNumber(0));
assert(isNonPositiveNumber(-1));
assertFalse(isNonPositiveNumber(1));
```

### isNegativeNumber

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/numeric/is_negative_number.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fnumeric%2Fis_negative_number.ts)

Whether the input is negative number or not.

```ts
import { isNegativeNumber } from "https://deno.land/x/isx@$VERSION/numeric/is_negative_number.ts";
import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
assert(isNegativeNumber(-1));
assertFalse(isNegativeNumber(0));
```

### isNonNegativeNumber

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/numeric/is_non_negative_number.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fnumeric%2Fis_non_negative_number.ts)

Whether the input is non-negative number or not. Non-negative number means
greater than or equal to zero.

```ts
import { isNonNegativeNumber } from "https://deno.land/x/isx@$VERSION/numeric/is_non_negative_number.ts";
import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
assert(isNonNegativeNumber(0));
assert(isNonNegativeNumber(1));
assertFalse(isNonNegativeNumber(-1));
```

### isUnitInterval

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/numeric/is_unit_interval.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fnumeric%2Fis_unit_interval.ts)

Whether the input is unit interval or not. The unit interval refers to the
interval between 0 and 1 on the real number line.

```ts
import { isUnitInterval } from "https://deno.land/x/isx@$VERSION/numeric/is_unit_interval.ts";
import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";
assert(isUnitInterval(0));
assert(isUnitInterval(1.0));
assertFalse(isUnitInterval(-1));
```

## Number subtypes

Validates a subtype of `number`. All validate functions must satisfy ⊂ `number`.

### isOdd

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/number/is_odd.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fnumber%2Fis_odd.ts)

Whether the input is odd or not.

```ts
import { isOdd } from "https://deno.land/x/isx@$VERSION/number/is_odd.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isOdd(1), true);
assertEquals(isOdd(0), false);
```

### isEven

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/number/is_even.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fnumber%2Fis_even.ts)

Whether the input is even or not.

```ts
import { isEven } from "https://deno.land/x/isx@$VERSION/number/is_even.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isEven(0), true);
assertEquals(isEven(1), false);
```

### isPositiveInteger

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/number/is_positive_integer.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fnumber%2Fis_positive_integer.ts)

Whether the input is positive integer or not.

```ts
import { isPositiveInteger } from "https://deno.land/x/isx@$VERSION/number/is_positive_integer.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isPositiveInteger(1), true);
assertEquals(isPositiveInteger(0), false);
```

### isNonNegativeInteger

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/number/is_non_negative_integer.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fnumber%2Fis_non_negative_integer.ts)

Whether the input is non negative integer or not.

```ts
import { isNonNegativeInteger } from "https://deno.land/x/isx@$VERSION/number/is_non_negative_integer.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isNonNegativeInteger(0), true);
assertEquals(isNonNegativeInteger(1.0), true);
assertEquals(isNonNegativeInteger(-1), false);
```

## Object subtypes

Validates a subtype of `object`. All validate functions must satisfy ⊂ `object`.

### isAsyncIterable

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/object/is_async_iterable.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fobject%2Fis_async_iterable.ts)

Whether the input is `AsyncIterable` or not.

```ts
import { isAsyncIterable } from "https://deno.land/x/isx@$VERSION/object/is_async_iterable.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(
  isAsyncIterable({
    async *[Symbol.asyncIterator]() {
      yield "hello";
    },
  }),
  true,
);
assertEquals(isAsyncIterable({}), false);
```

### isIterable

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/object/is_iterable.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fis_iterable.ts)

Whether the input is `Iterable` or not.

```ts
import { isIterable } from "https://deno.land/x/isx@$VERSION/object/is_iterable.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isIterable(""), true);
assertEquals(isIterable({}), false);
```

## Iterable subtypes

Validates a subtype of `Iterable`. All validate functions must satisfy ⊂
`Iterable<unknown>`.

### isEmpty

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/iterable/is_empty.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fiterable%2Fis_empty.ts)

Wether the input is empty or not.

```ts
import { isEmpty } from "https://deno.land/x/isx@$VERSION/iterable/is_empty.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";

assert(isEmpty(""));
assert(isEmpty([]));
assert(isEmpty(new Set()));
```

string:

If the input is a string, it has a `""` type guard.

array:

If the input is a array, it has a `[]` type guard.

### isNotEmpty

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/iterable/is_non_empty.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fiterable%2Fis_non_empty.ts)

Whether the input is not empty or not.

```ts
import { isNotEmpty } from "https://deno.land/x/isx@$VERSION/iterable/is_not_empty.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";

assert(isNotEmpty("a"));
assert(isNotEmpty([0, 1]));
```

array:

If the input is a `T[]`, it has a `[T, ...T[]]` type guard.

### isSingle

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/iterable/is_single.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fiterable%2Fis_single.ts)

Whether the input is single element or not.

```ts
import { isSingle } from "https://deno.land/x/isx@$VERSION/iterable/is_single.ts";
import { assert, assertFalse } from "https://deno.land/std/testing/asserts.ts";

assert(isSingle("a"));
assert(isSingle([0]));
assertFalse(isSingle([0, 1, 2]));
```

array:

If the input is a `T[]`, it has a `[T]` type guard.

## Date subtypes

Validates a subtype of `Date`. All validate functions must satisfy ⊂ `Date`.

### isValidDate

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/isx/date/is_valid_date.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fisx%2Fdate%2Fis_valid_date.ts)

Whether the input is valid `Date` or not.

```ts
import { isValidDate } from "https://deno.land/x/isx@$VERSION/date/is_valid_date.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
assertEquals(isValidDate(new Date("2000/1/1")), true);
assertEquals(isValidDate(new Date("invalid")), false);
```

## Bundle size

Bundle size is not exact. It is only a guide.

Usually, the actual bundle size is **smaller** than the indicated value.

## Where is mod?

There is no single entry point such as `mod`.

This prevents the inclusion of many unnecessary modules.

## License

[MIT](LICENSE) © 2021 Tomoki Miyauchi
