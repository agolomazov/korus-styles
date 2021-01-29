module.exports = {
  extends: [
    'eslint-config-korus-base',
    './rules/react-a11y',
    './rules/react',
  ].map(require.resolve),
  rules: {}
}