module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.css$': './src/output.css',
    },
    testEnvironment: 'jsdom',
  };
  