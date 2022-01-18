/*
 * @Author: Jsonz
 * @Date: 2022-01-18 16:17:25
 * @Email: jsonz@qq.com
 * @LastEditors: Jsonz
 * @LastEditTime: 2022-01-18 17:00:30
 * @Description: file content
 */
module.exports = {
  extends: [
    'plugin:react/recommended',
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
