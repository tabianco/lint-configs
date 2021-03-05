module.exports = {
  extends: [
    'stylelint-config-standard'
  ],

  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],

  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'order/properties-alphabetical-order': true,
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep']
    }]
  }
}
