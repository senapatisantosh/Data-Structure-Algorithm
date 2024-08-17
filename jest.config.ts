import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    testMatch: ['<rootDir>/test/**/*.test.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    coverageReporters: ['json-summary', 'cobertura', 'lcov'],
};

export default config;
