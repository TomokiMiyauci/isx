<p align="center">
  <h1 align="center">farray</h1>
</p>

<p align="center">
TypeScript-first functional array utility
</p>

<div align="center">

[![test](https://github.com/TomokiMiyauci/farray/actions/workflows/test.yml/badge.svg)](https://github.com/TomokiMiyauci/farray/actions/workflows/test.yml)
[![GitHub release](https://img.shields.io/github/release/TomokiMiyauci/farray.svg)](https://github.com/TomokiMiyauci/farray/releases)
![npm download](https://img.shields.io/npm/dw/farray?color=blue)

![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/TomokiMiyauci/farray)
[![dependencies Status](https://status.david-dm.org/gh/TomokiMiyauci/farray.svg)](https://david-dm.org/TomokiMiyauci/farray)
[![codecov](https://codecov.io/gh/TomokiMiyauci/farray/branch/main/graph/badge.svg?token=SPAi5Pv2wd)](https://codecov.io/gh/TomokiMiyauci/farray)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f43b1c317e11445399d85ce6efc06504)](https://www.codacy.com/gh/TomokiMiyauci/farray/dashboard?utm_source=github.com&utm_medium=referral&utm_content=TomokiMiyauci/farray&utm_campaign=Badge_Grade)
![npm type definitions](https://img.shields.io/npm/types/lauqe)
![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat)
![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

</div>

## Install

### Node.js

```bash
npm i farray
```

```bash
yarn add farray
```

```bash
pnpm add farray
```

### Deno

```ts
import { head } from 'https://esm.sh/farray'
```

## API

### head

Take first element or list safety

#### types

```ts
declare const head: <T extends string | readonly unknown[]>(val: T) => Head<T>
```

#### examples

```ts
// String
head('') // ''
head('hello') // 'h'
```

```ts
// Array
head<[]> // undefined
head<['hello', 'world']> // 'hello'
```

### last

Take last element of list safety

#### types

```ts
declare const last: <T extends string | readonly unknown[]>(val: T) => Last<T>
```

#### examples

```ts
// String
last('') // ''
last('hello') // 'o'
```

```ts
// Array
last('hello', 'new', 'world') // 'world'
last([]) // undefined
last(['one', 2, 3, 4]) // 4
```

### take

Return a slice of string or array with `n` elements taken from the beginning.

#### types

```ts
declare const take: <T extends string | readonly unknown[]>(
  howMany: number,
  val: T
) => T
```

#### examples

```ts
// String
take(3, 'hello') // 'hel'
```

```ts
// Array
take(3, [1, 2, 3, 4]) // [1, 2, 3]
```

### takeLast

Return a slice of string or array with `n` elements taken from the end

#### types

```ts
declare const takeLast: <T extends string | readonly unknown[]>(
  howMany: number,
  val: T
) => T
```

#### examples

```ts
// String
takeLast(3, 'hello') // 'llo'
```

```ts
// Array
takeLast(3, [1, 2, 3, 4]) // [2, 3, 4]
```

## :handshake: Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check
[issues](https://github.com/TomokiMiyauci/farray/issues).

## :seedling: Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/tomoki_miyauci">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## :bulb: License

Copyright © 2021-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license
