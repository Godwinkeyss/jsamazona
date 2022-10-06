/* eslint-disable quote-props */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 0,
    'comma-dangle': 0,
    'quotes': 0,
  }
};
