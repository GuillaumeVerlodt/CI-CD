export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        // Definieer hier de globale variabelen
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      'indent': ['error', 2, { SwitchCase: 1 }],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-tabs': ['error'],
      'max-len': ['error', { code: 120, tabWidth: 2 }],
      'arrow-parens': ['error', 'always'],
      'brace-style': ['error', '1tbs', { allowSingleLine: false }],
      'no-inner-declarations': 'off',
    },
  },
];
