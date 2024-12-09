module.exports = {
  env: {
    node: true,
    es2022: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-unused-expressions': [
      'error', {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.js', '**/*.test.js'],
      excludedFiles: 'babel.config.js',
    },
  ],
};
