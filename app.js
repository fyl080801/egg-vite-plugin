'use strict';

const vite = require('./app/middleware/vite');

module.exports = (app) => {
  if (app.config.vitePlugin && app.config.vitePlugin.devServer) {
    app.use(vite);
  }
};
