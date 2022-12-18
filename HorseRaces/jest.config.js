module.exports = {
  preset: 'react-native',
  reporters: ['default'],
  coverageReporters: ['lcov', 'json', 'html'],
  coveragePathIgnorePatterns: [
    'node_modules',
    '.styles.ts*',
    '.fixtures.ts',
    '.types.ts.*',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?(@)?react-native|@react-native-community)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/*.(test|tests).(ts|tsx)'],
}
