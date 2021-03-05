# stylelint Config

[![GitHub Actions](https://github.com/tabianco/lint-configs/workflows/ci/badge.svg?branch=main)](https://github.com/tabianco/lint-configs/actions?query=workflow%3Aci)
[![npm (scoped with tag)](https://flat.badgen.net/npm/v/@tabianco/stylelint-config)](https://npmjs.com/package/@tabianco/stylelint-config)
[![npm](https://flat.badgen.net/npm/dt/@tabianco/stylelint-config)](https://npmjs.com/package/@tabianco/stylelint-config)

[ESlint](https://eslint.org/) config used for Nuxt.js.

## Usage

Do you want to add the config to your own projects? There you go:

1. Add this package to your devDependencies

```bash
$ npm i -D @tabianco/stylelint-config
# or
$ yarn add -D @tabianco/stylelint-config
```

2. Install `stylelint` if not already present locally or globally

```bash
$ npm i -D stylelint
# or
$ yarn add -D stylelint
```

3. Create a `.stylelintrc` file

4. Extend our config:

```json
{
  "extends": [
    "@tabianco/stylelint-config"
  ]
}
```

## License

MIT - Tabian Co.
