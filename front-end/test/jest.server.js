const path = require('path')

module.exports = {
  displayName: 'server',
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  testEnvironment: 'jest-environment-node',
  testMatch: ['<rootDir>/**/__server_tests__/**/*.tsx'],
}
