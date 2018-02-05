module.exports = {
  projects: [
    {
      displayName: 'tests',
      testMatch: ['<rootDir>/src/**/*.spec.js']
    },
    {
      displayName: 'lint',
      "runner": "jest-runner-eslint",
      "testMatch": ["<rootDir>/**/*.js"]
    }
  ]
};
