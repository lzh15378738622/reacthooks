module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    wx: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    //    "airbnb",
    'prettier'
  ],
  //  "parser": "@typescript-eslint/parser",
  settings: {},
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    semi: ['error', 'never'],
    'no-unused-vars': 0,
    'no-console': 0,
    'no-debugger': 0,
    'react/prop-types': 1,
    'react-hooks/exhaustive-deps': 'off'
  }
}
