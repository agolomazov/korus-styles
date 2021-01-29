module.exports = {
  extends: [
    './rules/base',
    './rules/import',
    './rules/jsdoc',
    './rules/regex',
    './rules/prettier',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
}
