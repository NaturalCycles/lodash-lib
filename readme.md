## @naturalcycles/lodash-lib

> Cherry-picked Lodash functions and their typings.

[![npm](https://img.shields.io/npm/v/@naturalcycles/lodash-lib/latest.svg)](https://www.npmjs.com/package/@naturalcycles/lodash-lib)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Features

- Only useful functions that are not deprecated by ES201x
- Typings only for those functions (instructs you what is included and what's not)
- Typings are built-in (for TS 3.1+), no need to install separate @types/lodash package

# Included functions

- Array
  - chunk
  - flatten
  - flattenDeep
  - uniq
  - uniqBy
  - groupBy
  - orderBy
  - range
- Number
  - random
- Object
  - get
  - has
  - set
  - unset
  - invert
  - merge
  - omit
  - omitBy
  - pick
  - pickBy
- String
  - capitalize
  - upperFirst
  - startCase
  - split
- Util
  - toPath

See [build-lodash.sh](build-lodash.sh) for up-to-date list.

# Limitations

- Exported as commonjs only (no tree-shaking) currently. Tree-shaking of Lodash was quite tricky historically. 
Here we take different approach by cherry-picking useful functions only.

# Functions under consideration (not included)

- intersection
- union
- countBy
- shuffle
- debounce (prefer rxjs?)
- throttle (prefer rxjs?)
- cloneDeep (prefer JSON.parse/serialize?)
- clamp
- camelCase
- kebabCase
