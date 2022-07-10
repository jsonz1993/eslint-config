/*
 * @Author: Jsonz
 * @Date: 2022-01-18 16:17:25
 * @Email: jsonz@qq.com
 * @LastEditors: Jsonz
 * @LastEditTime: 2022-07-10 16:33:09
 * @Description: file content
 */
module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@jsonz/eslint-config-ts',
  ],
  settings: {
    react: {
      version: '17.x',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
