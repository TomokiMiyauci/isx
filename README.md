<p align="center">
  <h1 align="center">isx</h1>
</p>

<p align="center">
TypeScript-first is function collection
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

This is a very small collection of is? functions.

Some of them contain wrappers for `typeof` statements, which may be used to
reduce the number of repeated expressions and thus reduce the bundle size.

## Install

### Deno

```ts
import { isString } from "https://deno.land/x/isx";
```

### Node.js

```bash
npm i isxx
```

```bash
yarn add isxx
```

```bash
pnpm add isxx
```

## API

### isBoolean

Whatever argument is type of `boolean` or not

#### types

```ts
declare const isBoolean: (val: unknown) => val is boolean;
```

#### examples

```ts
isBoolean(true); // true
isBoolean("hello"); // false
```

### isLength0

Whatever argument length is `0` or not.

#### types

```ts
declare const isLength0: (val: { length: number }) => boolean;
```

#### examples

```ts
isLength0([]); // true
isLength0("hello"); // false
```

### isString

Whatever argument is type of `string` or not

#### types

```ts
declare const isString: (val: unknown) => val is string;
```

#### examples

```ts
isString("hello world"); // true
isString(1000); // false
```

### isNumber

Whatever argument is type of `number` or not

#### types

```ts
declare const isNumber: (val: unknown) => val is number;
```

#### examples

```ts
isNumber(0); // true
isNumber("hello"); // false
```

## :handshake: Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check
[issues](https://github.com/TomokiMiyauci/isx/issues).

## :seedling: Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/tomoki_miyauci">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## :bulb: License

Copyright © 2021-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license
