const {pathsToModuleNameMapper} = require('ts-jest/utils')
const {compilerOptions} = require('./tsconfig')

module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/index.ts'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  moduleNameMapper: {
    '@test-utils/(.*)': '<rootDir>/test-utils/$1',
    '@utils/(.*)': '<rootDir>/utils/$1',
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  preset: 'ts-jest',
  rootDir: '.',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  snapshotSerializers: ['jest-emotion'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.ts(x)?'],
  testPathIgnorePatterns: ['_utils'],
}
