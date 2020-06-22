module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  globals: {
    React: true,
    ReactDOM: true,
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-var': 'warn',
    'linebreak-style': 0,
  },
};
