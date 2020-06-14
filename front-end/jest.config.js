module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/index.ts'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 50,
      functions: 90,
      lines: 90,
    },
  },
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '@test-utils/(.*)': '<rootDir>/test-utils/$1',
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  preset: 'ts-jest',
  rootDir: __dirname,
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-axe/extend-expect',
  ],
  snapshotSerializers: ['jest-emotion'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.ts(x)?'],
}
