const common = require('../../eslint-common')

module.exports = {
  extends: [
    '@nuxtjs/eslint-config',
    'plugin:nuxt/recommended'
  ],

  ...common
}
