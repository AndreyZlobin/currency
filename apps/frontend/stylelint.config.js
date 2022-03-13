/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
module.exports = {
  files: ['./**/*.ts', './**/*.tsx'],
  customSyntax: '@stylelint/postcss-css-in-js',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-prettier', 'stylelint-order'],
  rules: {
    'no-empty-source': null,
    'function-no-unknown': null,
    'function-name-case': null,
    'value-keyword-case': null,
    'selector-class-pattern':
      '^([a-zA-Z][a-zA-Z0-9]*)(-[a-zA-Z0-9]+)|^Toastify.*$|^active.*$',
    'plugin/rational-order': [
      true,
      {
        'empty-line-between-groups': true,
      },
    ],
    'declaration-empty-line-before': null,
  },
};
