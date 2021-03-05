# Nuxt ESLint Config (supports TypeScript)

[![GitHub Actions](https://github.com/tabianco/lint-configs/workflows/ci/badge.svg?branch=main)](https://github.com/tabianco/lint-configs/actions?query=workflow%3Aci)
[![npm (scoped with tag)](https://flat.badgen.net/npm/v/@tabianco/eslint-config-typescript)](https://npmjs.com/package/@tabianco/eslint-config-typescript)
[![npm](https://flat.badgen.net/npm/dt/@tabianco/eslint-config-typescript)](https://npmjs.com/package/@tabianco/eslint-config-typescript)

[ESlint](https://eslint.org/) config used for Nuxt.js.

## Usage

Do you want to add the config to your own projects? There you go:

1. Add this package to your devDependencies

```bash
$ npm i -D @tabianco/eslint-config-typescript
# or
$ yarn add -D @tabianco/eslint-config-typescript
```

2. Install `eslint` if not already present locally or globally

```bash
$ npm i -D eslint
# or
$ yarn add -D eslint
```

3. Create a `.eslintrc` file

4. Extend our config:

```json
{
  "extends": [
    "@tabianco/eslint-config-typescript"
  ]
}
```

## Full example

A full example `.eslintrc` for a project with babel support:
> Dont forget to `npm i -D babel-eslint` or `yarn add -D babel-eslint`

```json
{
  "root": true,
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "extends": [
    "@tabianco/eslint-config-typescript"
  ]
}
```

## License

MIT - Tabian Co.
