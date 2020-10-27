export default {
  automock: false,
  bail: 5,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.tsx'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', './src/index.tsx'],
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  notify: true,
  preset: 'ts-jest',
  runner: 'jest-runner',
  setupFiles: ['./jest.setup.ts'],
  setupFilesAfterEnv: ['jest-enzyme', '<rootDir>jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  maxWorkers: '80%',
  moduleNameMapper: {
    //     '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    //     '^@/services/(.*)$': '<rootDir>/src/services/$1',
    //     '^@/components/(.*)$': '<rootDir>/src/components/$1',
    //     '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  testRunner: 'jasmine2',
  timers: 'real',
  transform: { '\\.tsx?$': 'ts-jest' },
};
