# @jsonz/eslint-config

Reference [@antfu/eslint-config](https://github.com/antfu/eslint-config)

[![npm](https://img.shields.io/npm/v/@jsonz/eslint-config)](https://npmjs.com/package/@jsonz/eslint-config)

## Usage

### Install

```bash
pnpm add -D eslint @jsonz/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": [
    "@jsonz"
  ]
}
```

### Config `.eslintignore`

```txt
dist
public
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint \"**/*.{tsx,ts,js}\""
  }
}
```

### Config VSCode auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
