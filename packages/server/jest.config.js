const { name } = require('./package.json')
const { compilerOptions } = require('./tsconfig.json')
const { pathsToModuleNameMapper } = require('ts-jest/utils')

module.exports = module.exports = {
  displayName: name,
  name,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/services/**/*.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'json',
    'lcov',
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
}