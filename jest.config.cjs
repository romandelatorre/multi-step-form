module.exports = {
  setupFilesAfterEnv: ['./setupTests.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
};
