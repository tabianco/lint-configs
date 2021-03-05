const common = require('../../eslint-common')

module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],

  ...common
}
