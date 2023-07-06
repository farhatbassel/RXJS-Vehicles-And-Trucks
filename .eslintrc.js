/* eslint-env node */
module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "parser": '@typescript-eslint/parser',
  "extends": [
    'airbnb-base',
    'airbnb-typescript/base',
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  "parserOptions": {
    "project": 'tsconfig.json',
    "sourceType": 'module'
  },
  "rules": {
    "no-unused-vars": "error",
    "max-len": ["error", { "code": 250 }],
    "no-console": "off",
    "no-useless-constructor": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": "off",
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"]
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "ignorePatterns":[
    ".eslintrc.js"
  ]
}