import js from '@eslint/js';
import airbnb from 'eslint-config-airbnb-base';
import stylistic from '@stylistic/eslint-plugin';
import tsEslint from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  airbnb,
  tsEslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/eol-last': ['error', 'always'],
      'import/extensions': ['error', 'ignorePackages'],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
    }
  }
]
