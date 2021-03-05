module.exports = {
  env: {
    browser: true,
    node: true
  },

  rules: {
    /**********************/
    /* General Code Rules */
    /**********************/

    'object-curly-newline': ['error', {
      ImportDeclaration: {
        consistent: true,
        multiline: true
      },
      ObjectExpression: {
        minProperties: 1
      },
      ObjectPattern: {
        consistent: true,
        multiline: true
      }
    }],

    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false
    }],

    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      next: 'return',
      prev: '*'
    }, {
      blankLine: 'always',
      next: '*',
      prev: ['const', 'let', 'multiline-block-like', 'multiline-expression', 'var']
    }, {
      blankLine: 'always',
      next: ['const', 'let', 'multiline-block-like', 'multiline-expression', 'var'],
      prev: '*'
    }, {
      blankLine: 'any',
      next: ['const', 'let', 'var'],
      prev: ['const', 'let', 'var']
    }],

    'sort-vars': ['error'],

    /**********************/
    /*     Vue Rules      */
    /**********************/

    'vue/attributes-order': ['error', {
      alphabetical: true
    }],

    'vue/block-tag-newline': ['error', {
      singleline: 'always'
    }],

    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: false
    }],

    // Enforce single attribute per line
    // overrides @nuxt/eslint-config
    'vue/max-attributes-per-line': ['error', {
      singleline: 1
    }],

    'vue/new-line-between-multi-line-property': 'error',

    'vue/sort-keys': [
      'error', 'asc', {
        ignoreChildrenOf: [],
        ignoreGrandchildrenOf: [
          'meta',
          'props'
        ],
        natural: true
      }
    ],

    'vue/static-class-names-order': 'error'
  }
}
