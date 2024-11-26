module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
