import stylisticJs from '@stylistic/eslint-plugin-js'
import globals from 'globals'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      '@stylistic/js/arrow-parens': ['error', 'always'],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
    },
  },
]
