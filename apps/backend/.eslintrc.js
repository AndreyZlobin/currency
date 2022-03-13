module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ["import", "prettier", "@typescript-eslint", "simple-import-sort"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
  },
  rules: {
    "no-trailing-spaces": ["error", { skipBlankLines: true }],
    "no-multiple-empty-lines": "error",
    "no-use-before-define": ["error", { functions: false, classes: false }],
    semi: [2, "always"],
    "@typescript-eslint/semi": [2, "always"],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-console": ["warn", { allow: ["info", "warn", "error"] }],
    "newline-after-var": ["error", "always"],
    "no-nested-ternary": "off",
    "no-debugger": "warn",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "global-require": "off",
    "no-new": "off",
    "no-useless-constructor": "off",
    "any non-nullish value": "off",
    "import/extensions": "off",
    "no-unused-expressions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "no-return-await": "off",
    "consistent-return": "off",
    "func-names": "off",
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    camelcase: "off",
  },
};