module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
