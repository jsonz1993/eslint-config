/*
 * @Author: Jsonz
 * @Date: 2022-01-18 15:32:13
 * @Email: jsonz@qq.com
 * @LastEditors: Jsonz
 * @LastEditTime: 2022-11-24 19:35:55
 * @Description: file content
 */

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:eslint-comments/recommended',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
    },
  },
  overrides: [{
    files: ['*.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  }, {
    files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
    rules: {
      'no-unused-expressions': 'off',
    },
  }],
  rules: {
    // import
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',

    // common
    'semi': ['error', 'never'],
    // 'curly': ['error', 'multi-or-nest', 'consistent'],
    'eslint-comments/disable-enable-pair': ['off'],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent'],
    'no-console': ['warn'],

    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],

    'prefer-promise-reject-errors': 'off',
    'promise/param-names': 'off',
  },
}
