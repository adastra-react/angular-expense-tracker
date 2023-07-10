module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx|ngx-socket-io)'],
  moduleFileExtensions: ['ts', 'js', 'html'],
};
