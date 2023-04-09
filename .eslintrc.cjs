module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error'],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['FormLabel'],
        labelAttributes: ['label'],
        controlComponents: ['input'],
        depth: 1
      }
    ]
  }
};