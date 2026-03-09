/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import nextJest from "next/jest";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "./coverage",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}", // Adjust this to your source folder
    "lib/**/*.{ts,tsx}", // Adjust this to your source folder
    "!lib/application.ts",
    "!lib/applicationStatus.ts",

    "!./**/*.d.ts", // Ignore type definitions
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
