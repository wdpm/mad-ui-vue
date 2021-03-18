module.exports = {
  root: true,

  extends: [
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript',
  ],

  plugins: ['@typescript-eslint'],

  env: {
    node: true,
    builtin: true,
    es6: true,
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    extraFileExtensions: ['.vue'],
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    sourceType: 'module',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    'ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-this-alias': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/no-unused-components': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    'vue/valid-template-root': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
}
