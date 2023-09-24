// webpack.config.js
const path = require('path');

module.exports = {
  // ...
  resolve: {
    alias: {
      // Example alias configuration:
      'module-alias': path.resolve(__dirname, '/public/index.html'),
    },
  },
  // ...
};
