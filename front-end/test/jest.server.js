import path from 'path'

module.exports = {
  ...require('./jest-common'),
  displayName: 'server',
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  testEnvironment: 'jest-environment-node',
  testMatch: ['<rootDir>/**/__server_tests__/**/*.js'],
}
