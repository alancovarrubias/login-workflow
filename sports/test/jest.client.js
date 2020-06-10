module.exports = {
  ...require('./jest-common'),
  displayName: 'browser',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
  testMatch: ['**/__tests__/**/*.js'],
}
