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
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep']
    }]
  }
}
