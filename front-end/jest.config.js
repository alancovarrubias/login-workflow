module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 64,
      branches: 0,
      functions: 73,
      lines: 70,
    },
  },
  projects: ['test/jest.lint.js', 'test/jest.client.js', 'test/jest.server.js'],
}
