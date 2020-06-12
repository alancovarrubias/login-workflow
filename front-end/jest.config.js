module.exports = {
  rootDir: __dirname,
  moduleNameMapper: {
    '@test-utils/(.*)': '<rootDir>/test-utils/$1',
  },
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  coverageThreshold: {
    global: {
      statements: 64,
      branches: 0,
      functions: 73,
      lines: 70,
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
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/__tests__/*.tsx'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-axe/extend-expect',
    'module-alias/register',
  ],
  snapshotSerializers: ['jest-emotion'],
}
