# [1.3.0](https://github.com/TomokiMiyauci/isx/compare/1.2.0...1.3.0) (2023-04-13)


### Features

* **is_non_nullable:** add `isNonNullable` function ([d31fdc1](https://github.com/TomokiMiyauci/isx/commit/d31fdc1c545155af2f73bd261412766a0f511d64))
* **number:** add `isUnitInterval` function ([dabacd8](https://github.com/TomokiMiyauci/isx/commit/dabacd8c0fbed77cc2ed4dea980ce734a6112f6f))

# [1.3.0-beta.1](https://github.com/TomokiMiyauci/isx/compare/1.2.0...1.3.0-beta.1) (2023-04-13)


### Features

* **is_non_nullable:** add `isNonNullable` function ([d31fdc1](https://github.com/TomokiMiyauci/isx/commit/d31fdc1c545155af2f73bd261412766a0f511d64))
* **number:** add `isUnitInterval` function ([dabacd8](https://github.com/TomokiMiyauci/isx/commit/dabacd8c0fbed77cc2ed4dea980ce734a6112f6f))

# [1.2.0](https://github.com/TomokiMiyauci/isx/compare/1.1.1...1.2.0) (2023-04-11)


### Features

* **is_array:** add `isArray` function ([5f3f847](https://github.com/TomokiMiyauci/isx/commit/5f3f847b9223c60077f77cc85e260a6dd7dc35d6))


### Performance Improvements

* **iterable:** stop spread operator ([8c5f2f6](https://github.com/TomokiMiyauci/isx/commit/8c5f2f60e3257cd3db1fe1af351c33cee56b94be))

# [1.2.0-beta.1](https://github.com/TomokiMiyauci/isx/compare/1.1.1...1.2.0-beta.1) (2023-04-11)


### Features

* **is_array:** add `isArray` function ([5f3f847](https://github.com/TomokiMiyauci/isx/commit/5f3f847b9223c60077f77cc85e260a6dd7dc35d6))


### Performance Improvements

* **iterable:** stop spread operator ([8c5f2f6](https://github.com/TomokiMiyauci/isx/commit/8c5f2f60e3257cd3db1fe1af351c33cee56b94be))

## [1.1.1](https://github.com/TomokiMiyauci/isx/compare/1.1.0...1.1.1) (2023-03-27)


### Bug Fixes

* **iterable:** add overload before readonly array type guard ([73255e1](https://github.com/TomokiMiyauci/isx/commit/73255e1d97bb1ec096a911cbf2a6b4afeb459d77)), closes [#4](https://github.com/TomokiMiyauci/isx/issues/4)

## [1.1.1-beta.1](https://github.com/TomokiMiyauci/isx/compare/1.1.0...1.1.1-beta.1) (2023-03-27)


### Bug Fixes

* **iterable:** add overload before readonly array type guard ([73255e1](https://github.com/TomokiMiyauci/isx/commit/73255e1d97bb1ec096a911cbf2a6b4afeb459d77)), closes [#4](https://github.com/TomokiMiyauci/isx/issues/4)

# [1.1.0](https://github.com/TomokiMiyauci/isx/compare/1.0.0...1.1.0) (2023-03-27)


### Bug Fixes

* **iterable:** add readonly signature to type guard ([5231d32](https://github.com/TomokiMiyauci/isx/commit/5231d3232d955371ca558a86eb99f6b348a2cb14))


### Features

* **iterable:** add `isEmpty` function for iterable ([fc1d5f1](https://github.com/TomokiMiyauci/isx/commit/fc1d5f1304105b7b500724462b608340ca53937b))
* **iterable:** add `isNotEmpty` function for iterable ([3d2b9db](https://github.com/TomokiMiyauci/isx/commit/3d2b9dbc29647d34fecc7d7673a4d6d8cd289225))
* **iterable:** add `isSingle` function for iterable ([1b4360c](https://github.com/TomokiMiyauci/isx/commit/1b4360c9bdf06b366b7572a31f349dd2642f66ec))

# [1.1.0-beta.1](https://github.com/TomokiMiyauci/isx/compare/1.0.0...1.1.0-beta.1) (2023-03-27)


### Bug Fixes

* **iterable:** add readonly signature to type guard ([5231d32](https://github.com/TomokiMiyauci/isx/commit/5231d3232d955371ca558a86eb99f6b348a2cb14))


### Features

* **iterable:** add `isEmpty` function for iterable ([fc1d5f1](https://github.com/TomokiMiyauci/isx/commit/fc1d5f1304105b7b500724462b608340ca53937b))
* **iterable:** add `isNotEmpty` function for iterable ([3d2b9db](https://github.com/TomokiMiyauci/isx/commit/3d2b9dbc29647d34fecc7d7673a4d6d8cd289225))
* **iterable:** add `isSingle` function for iterable ([1b4360c](https://github.com/TomokiMiyauci/isx/commit/1b4360c9bdf06b366b7572a31f349dd2642f66ec))

# 1.0.0 (2023-03-26)


### Bug Fixes

* **_tools:** fix npm build script for generate types versions ([ddb39fc](https://github.com/TomokiMiyauci/isx/commit/ddb39fc674ea0f62c495ff5d982eff8148808f4f))
* do not re-export for unsupported bundler ([3fd20d7](https://github.com/TomokiMiyauci/isx/commit/3fd20d73444eff7e86b1e2d750f1440922d8468e))
* export `isNil` function globaly ([cbf5536](https://github.com/TomokiMiyauci/isx/commit/cbf5536ccae85ac0188bdd31630231ee5da1b9b0))
* **object:** fix `isEmptyObject` logic ([7873b2c](https://github.com/TomokiMiyauci/isx/commit/7873b2caeffd430c3d88b3d2ced3051e053d4308))
* **string:** fix export module ([c2d602e](https://github.com/TomokiMiyauci/isx/commit/c2d602e948acd5af36c41e0b182753b75d9f63f3))
* **unknown:** fix `isIterable` function that exclude not Iterator ([0d2224e](https://github.com/TomokiMiyauci/isx/commit/0d2224ec1d17722eea22f46b0e0eb582d321be97))


### Features

* add `isDate` function ([39a8605](https://github.com/TomokiMiyauci/isx/commit/39a8605062b9da9e9ead5f529a9d6805cf7b2f38))
* add `isEmptyArray` function ([264f3e1](https://github.com/TomokiMiyauci/isx/commit/264f3e122fb54ea6004b312dcd52027b75852451))
* add `isEmptyString` function ([3d9f9e4](https://github.com/TomokiMiyauci/isx/commit/3d9f9e4f374c68e52543ab0949bbc59ea5ccc60d))
* add `isFalse` function ([5091300](https://github.com/TomokiMiyauci/isx/commit/50913007daef76fb0791d3adfb6a3d9c27ceb280))
* add `isFunction` and `isPrimitive` functions ([4fd0bd3](https://github.com/TomokiMiyauci/isx/commit/4fd0bd30c4487f4163fed8791f76fab81eeb1eea))
* add `isNil` function ([ecff67f](https://github.com/TomokiMiyauci/isx/commit/ecff67f10c21dd85a33bfe9430177f881b308501))
* add `isNull` function ([c182719](https://github.com/TomokiMiyauci/isx/commit/c182719c0c1b3dec87bfc66116f45b207bca8387))
* add `isObject` and `isEmptyObject` functions ([2a52bf9](https://github.com/TomokiMiyauci/isx/commit/2a52bf9c2f4c503ec5fafc7c63d05127f0867a76))
* add `isPromise` and `isError` functions ([18ed614](https://github.com/TomokiMiyauci/isx/commit/18ed6145b14d46475dd9b608da0af32bdd0f6504))
* add `isTrue` function ([a1e5f61](https://github.com/TomokiMiyauci/isx/commit/a1e5f6113c4dd099c09c4b5437194d8b65fdf3f7))
* be Deno first codebase, add some is functions ([b5e3069](https://github.com/TomokiMiyauci/isx/commit/b5e30696c700c3947719d16d9c3517c374026ae7))
* **date:** add `isValidDate` function ([b0d2412](https://github.com/TomokiMiyauci/isx/commit/b0d24126517c9ba871eb9435d88cd7079b5f3bdf))
* **date:** export `isValidDate` function ([daf77bc](https://github.com/TomokiMiyauci/isx/commit/daf77bca2461879b1f5173ee5c290a400c6f8f4b))
* export validation for number subset ([670d336](https://github.com/TomokiMiyauci/isx/commit/670d3362416f5839f78537e68386a2da18383f64))
* **iterable:** add `isIterable` function ([c7f2450](https://github.com/TomokiMiyauci/isx/commit/c7f24508d19f351fcf784166b3130f0e9d3790ce))
* **mod:** export `isRegExp` globaly ([30125c8](https://github.com/TomokiMiyauci/isx/commit/30125c8639a4cc96539fe3a970ee94d47801f201))
* **number:** add `isEven` function ([a9d900d](https://github.com/TomokiMiyauci/isx/commit/a9d900d4967826101a5b3a2ac83e7876b0d2d67d))
* **number:** add `isNegativeNumber` function ([fb845a8](https://github.com/TomokiMiyauci/isx/commit/fb845a84f781fc86368c6dc8aef5bfccdb271044))
* **number:** add `isNonNegativeInteger` function ([92fa0c5](https://github.com/TomokiMiyauci/isx/commit/92fa0c5b608896aa2de4fe8802cc1f0923987f15))
* **number:** add `isOdd` function ([1090064](https://github.com/TomokiMiyauci/isx/commit/1090064c91dc1e79a146513498203f954de6bc9a))
* **number:** add `isPositiveNumber` function ([0ff70ea](https://github.com/TomokiMiyauci/isx/commit/0ff70eaf63b514eeb19fe70cc9a48468a5b1e8af))
* **numbers:** add `isNonNegativeNumber` function ([a5b09ed](https://github.com/TomokiMiyauci/isx/commit/a5b09ed24831bcc1af7e68e4bcf33ec1033c1b37))
* **numbers:** add `isNonPositiveNumber` function ([9005e4d](https://github.com/TomokiMiyauci/isx/commit/9005e4d22e73e5b40158a25494043e8d1d5ee274))
* **object:** add `hasOwn` function ([3dac147](https://github.com/TomokiMiyauci/isx/commit/3dac147933d05c26d8512038a65ac6aae29ce307))
* **object:** add `isSize0` function ([0efb1af](https://github.com/TomokiMiyauci/isx/commit/0efb1af2e010180c33187cfabe2a41b9e9975f2f))
* split all modules by file ([5d042f6](https://github.com/TomokiMiyauci/isx/commit/5d042f6a90a8f21372e01119cd4875b37f2a7986))
* **string:** add `isDateString` function ([86cd23a](https://github.com/TomokiMiyauci/isx/commit/86cd23a4b9be26835f30fe9b981d9993c9f48553))
* **string:** add `isHexColor` function ([d5266fa](https://github.com/TomokiMiyauci/isx/commit/d5266fa74281422d95111762f2f2b722b11b9f60))
* **string:** rename `isHexColor` to `isHexColorFormat` ([a2fe0d6](https://github.com/TomokiMiyauci/isx/commit/a2fe0d655ca07800124af568121eb4e3ae74d882))
* **strings:** add validation for hostname format ([234e8a2](https://github.com/TomokiMiyauci/isx/commit/234e8a238fc818abab87cd05136e676a1bd3a56b))
* **strings:** add validation for rfc 3339 date format ([ef1532a](https://github.com/TomokiMiyauci/isx/commit/ef1532af2883d00dcd1a0ea060c1cc3688899a2c))
* **strings:** add validation for RFC 3339 date time format ([2b675a3](https://github.com/TomokiMiyauci/isx/commit/2b675a318a1f41d9cb56ca8bf65acaee2c695d50))
* **strings:** add validation for RFC 3339 full-time format ([92b36fb](https://github.com/TomokiMiyauci/isx/commit/92b36fb9c1f5292adb9cd8a815e9633b41dc660f))
* **strings:** delete all string subset ([e0946e3](https://github.com/TomokiMiyauci/isx/commit/e0946e3debbda713e36529ebef1b35e42cf8ae7b))
* **symbol:** add `isSymbol` function ([f24e250](https://github.com/TomokiMiyauci/isx/commit/f24e2505354297a909988b35cc6e202447c4a945))
* **top_types:** add `isEmptyObject` function ([cb15082](https://github.com/TomokiMiyauci/isx/commit/cb15082fc7c1821c4c2bb8f7a9801055fec84dfc))
* **top_types:** add `isNonNullable` function ([9f8b5fd](https://github.com/TomokiMiyauci/isx/commit/9f8b5fdb46ca18f75888e086b5ab29ac2c649159))
* **toptypes:** add `isRegExp` function ([87a3d06](https://github.com/TomokiMiyauci/isx/commit/87a3d06558e8f688ea6e122ae5a7e7f23dd1db74))
* **union:** add `isEmpty` function ([6262cd4](https://github.com/TomokiMiyauci/isx/commit/6262cd4ad8b69b10d1e87f7c744d39509d8a7d7a))
* **unknown:** add `isAsyncGenerator` function ([15fc58e](https://github.com/TomokiMiyauci/isx/commit/15fc58e89ab75ae23808417e0592b1f14d69c333))
* **unknown:** add `isAsyncIterable` function ([9491020](https://github.com/TomokiMiyauci/isx/commit/9491020bf3cf7ab2e0f2d09318463b24c8ab5f83))
* **unknown:** add `isBigint` function ([6286418](https://github.com/TomokiMiyauci/isx/commit/6286418cdfdc92afbf58003e9ff424008e692fe3))
* **unknown:** add `isEmpty` function ([ce708b0](https://github.com/TomokiMiyauci/isx/commit/ce708b028a405be963dbcfa734e75b518770984f))
* **unknown:** add `isFalsy` function ([68c6c28](https://github.com/TomokiMiyauci/isx/commit/68c6c283ac42ba2cdd9dd3792158f20f015f169c))
* **unknown:** add `isPlainObject` function ([8f6f302](https://github.com/TomokiMiyauci/isx/commit/8f6f302b6bbe5200dc3043b7fb794dbae7e7f2fa))
* **unknown:** add `isTruty` function ([dfc14a0](https://github.com/TomokiMiyauci/isx/commit/dfc14a0ac8063e76a4ddf1bc8ca61c5ff8d6deb4))
* **unknown:** remove functions with excessive narrowing ([c7a8cb0](https://github.com/TomokiMiyauci/isx/commit/c7a8cb061871fd6d319a3f14b3770e4aca364311))
* **unknown:** rename Maybe prefix to Like suffix ([c8861ca](https://github.com/TomokiMiyauci/isx/commit/c8861caa94fcba306e297eb0314cd3b4812890d6))


### Performance Improvements

* **strings:** add pure anotation for bundler ([0a3b1d0](https://github.com/TomokiMiyauci/isx/commit/0a3b1d0190a5ee5950742674b91b034793b40d93))
* **strings:** remove template literal for tree-shaking ([b291ae4](https://github.com/TomokiMiyauci/isx/commit/b291ae489e922fe89f555234ed42df53957858ba))

# [1.0.0-beta.26](https://github.com/TomokiMiyauci/isx/compare/1.0.0-beta.25...1.0.0-beta.26) (2023-03-26)


### Bug Fixes

* **_tools:** fix npm build script for generate types versions ([ddb39fc](https://github.com/TomokiMiyauci/isx/commit/ddb39fc674ea0f62c495ff5d982eff8148808f4f))

# [1.0.0-beta.25](https://github.com/TomokiMiyauci/isx/compare/1.0.0-beta.24...1.0.0-beta.25) (2023-03-25)


### Features

* split all modules by file ([5d042f6](https://github.com/TomokiMiyauci/isx/commit/5d042f6a90a8f21372e01119cd4875b37f2a7986))
* **strings:** delete all string subset ([e0946e3](https://github.com/TomokiMiyauci/isx/commit/e0946e3debbda713e36529ebef1b35e42cf8ae7b))

# [1.0.0-beta.24](https://github.com/TomokiMiyauci/isx/compare/1.0.0-beta.23...1.0.0-beta.24) (2022-10-31)


### Features

* **numbers:** add `isNonNegativeNumber` function ([a5b09ed](https://github.com/TomokiMiyauci/isx/commit/a5b09ed24831bcc1af7e68e4bcf33ec1033c1b37))
* **numbers:** add `isNonPositiveNumber` function ([9005e4d](https://github.com/TomokiMiyauci/isx/commit/9005e4d22e73e5b40158a25494043e8d1d5ee274))

# [1.0.0-beta.23](https://github.com/TomokiMiyauci/isx/compare/1.0.0-beta.22...1.0.0-beta.23) (2022-10-26)


### Features

* **top_types:** add `isEmptyObject` function ([cb15082](https://github.com/TomokiMiyauci/isx/commit/cb15082fc7c1821c4c2bb8f7a9801055fec84dfc))
* **top_types:** add `isNonNullable` function ([9f8b5fd](https://github.com/TomokiMiyauci/isx/commit/9f8b5fdb46ca18f75888e086b5ab29ac2c649159))


### Performance Improvements

* **strings:** add pure anotation for bundler ([0a3b1d0](https://github.com/TomokiMiyauci/isx/commit/0a3b1d0190a5ee5950742674b91b034793b40d93))
* **strings:** remove template literal for tree-shaking ([b291ae4](https://github.com/TomokiMiyauci/isx/commit/b291ae489e922fe89f555234ed42df53957858ba))

# [1.0.0-beta.22](https://github.com/TomokiMiyauci/isx/compare/1.0.0-beta.21...1.0.0-beta.22) (2022-09-22)


### Features

* **mod:** export `isRegExp` globaly ([30125c8](https://github.com/TomokiMiyauci/isx/commit/30125c8639a4cc96539fe3a970ee94d47801f201))
* **toptypes:** add `isRegExp` function ([87a3d06](https://github.com/TomokiMiyauci/isx/commit/87a3d06558e8f688ea6e122ae5a7e7f23dd1db74))

# [1.0.0-beta.21](https://github.com/TomokiMiyauci/isx/compare/1.0.0-beta.20...1.0.0-beta.21) (2022-08-31)


### Features

* **date:** export `isValidDate` function ([daf77bc](https://github.com/TomokiMiyauci/isx/commit/daf77bca2461879b1f5173ee5c290a400c6f8f4b))
* export validation for number subset ([670d336](https://github.com/TomokiMiyauci/isx/commit/670d3362416f5839f78537e68386a2da18383f64))
* **object:** add `hasOwn` function ([3dac147](https://github.com/TomokiMiyauci/isx/commit/3dac147933d05c26d8512038a65ac6aae29ce307))
* **string:** rename `isHexColor` to `isHexColorFormat` ([a2fe0d6](https://github.com/TomokiMiyauci/isx/commit/a2fe0d655ca07800124af568121eb4e3ae74d882))
* **strings:** add validation for hostname format ([234e8a2](https://github.com/TomokiMiyauci/isx/commit/234e8a238fc818abab87cd05136e676a1bd3a56b))
* **strings:** add validation for rfc 3339 date format ([ef1532a](https://github.com/TomokiMiyauci/isx/commit/ef1532af2883d00dcd1a0ea060c1cc3688899a2c))
* **strings:** add validation for RFC 3339 date time format ([2b675a3](https://github.com/TomokiMiyauci/isx/commit/2b675a318a1f41d9cb56ca8bf65acaee2c695d50))
* **strings:** add validation for RFC 3339 full-time format ([92b36fb](https://github.com/TomokiMiyauci/isx/commit/92b36fb9c1f5292adb9cd8a815e9633b41dc660f))
* **unknown:** remove functions with excessive narrowing ([c7a8cb0](https://github.com/TomokiMiyauci/isx/commit/c7a8cb061871fd6d319a3f14b3770e4aca364311))
* **unknown:** rename Maybe prefix to Like suffix ([c8861ca](https://github.com/TomokiMiyauci/isx/commit/c8861caa94fcba306e297eb0314cd3b4812890d6))

# [1.0.0-beta.20](https://github.com/TomokiMiyauci/isx/compare/1.0.0-beta.19...1.0.0-beta.20) (2022-08-25)


### Features

* **number:** add `isNonNegativeInteger` function ([92fa0c5](https://github.com/TomokiMiyauci/isx/commit/92fa0c5b608896aa2de4fe8802cc1f0923987f15))
* **unknown:** add `isBigint` function ([6286418](https://github.com/TomokiMiyauci/isx/commit/6286418cdfdc92afbf58003e9ff424008e692fe3))
* **unknown:** add `isFalsy` function ([68c6c28](https://github.com/TomokiMiyauci/isx/commit/68c6c283ac42ba2cdd9dd3792158f20f015f169c))
* **unknown:** add `isTruty` function ([dfc14a0](https://github.com/TomokiMiyauci/isx/commit/dfc14a0ac8063e76a4ddf1bc8ca61c5ff8d6deb4))

# [1.0.0-beta.19](https://github.com/TomokiMiyauci/isx/compare/1.0.0-beta.18...1.0.0-beta.19) (2022-08-03)


### Bug Fixes

* **unknown:** fix `isIterable` function that exclude not Iterator ([0d2224e](https://github.com/TomokiMiyauci/isx/commit/0d2224ec1d17722eea22f46b0e0eb582d321be97))


### Features

* **unknown:** add `isAsyncGenerator` function ([15fc58e](https://github.com/TomokiMiyauci/isx/commit/15fc58e89ab75ae23808417e0592b1f14d69c333))
* **unknown:** add `isAsyncIterable` function ([9491020](https://github.com/TomokiMiyauci/isx/commit/9491020bf3cf7ab2e0f2d09318463b24c8ab5f83))
* **unknown:** add `isPlainObject` function ([8f6f302](https://github.com/TomokiMiyauci/isx/commit/8f6f302b6bbe5200dc3043b7fb794dbae7e7f2fa))

# [1.0.0-beta.18](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.17...1.0.0-beta.18) (2022-08-03)


### Features

* **unknown:** add `isEmpty` function ([ce708b0](https://github.com/TomokiMiyauci/isx/commit/ce708b028a405be963dbcfa734e75b518770984f))

# [1.0.0-beta.17](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.16...v1.0.0-beta.17) (2021-11-28)


### Features

* **iterable:** add `isIterable` function ([c7f2450](https://github.com/TomokiMiyauci/isx/commit/c7f24508d19f351fcf784166b3130f0e9d3790ce))
* **union:** add `isEmpty` function ([6262cd4](https://github.com/TomokiMiyauci/isx/commit/6262cd4ad8b69b10d1e87f7c744d39509d8a7d7a))

# [1.0.0-beta.16](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.15...v1.0.0-beta.16) (2021-11-26)


### Bug Fixes

* **string:** fix export module ([c2d602e](https://github.com/TomokiMiyauci/isx/commit/c2d602e948acd5af36c41e0b182753b75d9f63f3))


### Features

* **string:** add `isDateString` function ([86cd23a](https://github.com/TomokiMiyauci/isx/commit/86cd23a4b9be26835f30fe9b981d9993c9f48553))
* **string:** add `isHexColor` function ([d5266fa](https://github.com/TomokiMiyauci/isx/commit/d5266fa74281422d95111762f2f2b722b11b9f60))

# [1.0.0-beta.15](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2021-11-21)


### Bug Fixes

* do not re-export for unsupported bundler ([3fd20d7](https://github.com/TomokiMiyauci/isx/commit/3fd20d73444eff7e86b1e2d750f1440922d8468e))

# [1.0.0-beta.14](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2021-11-21)


### Bug Fixes

* **object:** fix `isEmptyObject` logic ([7873b2c](https://github.com/TomokiMiyauci/isx/commit/7873b2caeffd430c3d88b3d2ced3051e053d4308))


### Features

* **object:** add `isSize0` function ([0efb1af](https://github.com/TomokiMiyauci/isx/commit/0efb1af2e010180c33187cfabe2a41b9e9975f2f))

# [1.0.0-beta.13](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2021-11-20)


### Features

* **number:** add `isEven` function ([a9d900d](https://github.com/TomokiMiyauci/isx/commit/a9d900d4967826101a5b3a2ac83e7876b0d2d67d))
* **number:** add `isNegativeNumber` function ([fb845a8](https://github.com/TomokiMiyauci/isx/commit/fb845a84f781fc86368c6dc8aef5bfccdb271044))
* **number:** add `isOdd` function ([1090064](https://github.com/TomokiMiyauci/isx/commit/1090064c91dc1e79a146513498203f954de6bc9a))
* **number:** add `isPositiveNumber` function ([0ff70ea](https://github.com/TomokiMiyauci/isx/commit/0ff70eaf63b514eeb19fe70cc9a48468a5b1e8af))

# [1.0.0-beta.12](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.11...v1.0.0-beta.12) (2021-11-20)


### Features

* **date:** add `isValidDate` function ([b0d2412](https://github.com/TomokiMiyauci/isx/commit/b0d24126517c9ba871eb9435d88cd7079b5f3bdf))
* **symbol:** add `isSymbol` function ([f24e250](https://github.com/TomokiMiyauci/isx/commit/f24e2505354297a909988b35cc6e202447c4a945))

# [1.0.0-beta.11](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2021-11-20)


### Features

* add `isFalse` function ([5091300](https://github.com/TomokiMiyauci/isx/commit/50913007daef76fb0791d3adfb6a3d9c27ceb280))
* add `isTrue` function ([a1e5f61](https://github.com/TomokiMiyauci/isx/commit/a1e5f6113c4dd099c09c4b5437194d8b65fdf3f7))

# [1.0.0-beta.10](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2021-11-19)


### Bug Fixes

* export `isNullable` function globaly ([cbf5536](https://github.com/TomokiMiyauci/isx/commit/cbf5536ccae85ac0188bdd31630231ee5da1b9b0))

# [1.0.0-beta.9](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2021-11-19)


### Features

* add `isNullable` function ([ecff67f](https://github.com/TomokiMiyauci/isx/commit/ecff67f10c21dd85a33bfe9430177f881b308501))

# [1.0.0-beta.8](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2021-11-19)


### Features

* add `isPromise` and `isError` functions ([18ed614](https://github.com/TomokiMiyauci/isx/commit/18ed6145b14d46475dd9b608da0af32bdd0f6504))

# [1.0.0-beta.7](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2021-11-17)


### Features

* add `isDate` function ([39a8605](https://github.com/TomokiMiyauci/isx/commit/39a8605062b9da9e9ead5f529a9d6805cf7b2f38))

# [1.0.0-beta.6](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2021-11-16)


### Features

* add `isFunction` and `isPrimitive` functions ([4fd0bd3](https://github.com/TomokiMiyauci/isx/commit/4fd0bd30c4487f4163fed8791f76fab81eeb1eea))

# [1.0.0-beta.5](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2021-11-16)


### Features

* add `isObject` and `isEmptyObject` functions ([2a52bf9](https://github.com/TomokiMiyauci/isx/commit/2a52bf9c2f4c503ec5fafc7c63d05127f0867a76))

# [1.0.0-beta.4](https://github.com/TomokiMiyauci/isx/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2021-11-16)


### Features

* add `isNull` function ([c182719](https://github.com/TomokiMiyauci/isx/commit/c182719c0c1b3dec87bfc66116f45b207bca8387))
