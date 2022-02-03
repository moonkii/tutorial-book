module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    '@testing-library/jest-dom/extend-expect',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
  coverageReporters: ['text', 'html'],
};
