var path = require('path');

module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  rootDir: path.join(__dirname, './tests'),
  testMatch: [path.join(__dirname, '**/*.test.ts')],
  moduleNameMapper: {
    axios: 'axios/dist/node/axios.cjs',
  },
  setupFilesAfterEnv: ['<rootDir>/setup.ts'],
};
