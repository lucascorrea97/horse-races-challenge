module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'react-hooks/exhaustive-deps': 'off',
        'no-shadow': 'off',
        semi: 'off',
        'no-undef': 'off',
      },
    },
  ],
  ignorePatterns: ['/coverage/**'],
}
