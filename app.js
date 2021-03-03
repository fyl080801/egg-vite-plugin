'use strict';

const vite = require('./app/middleware/vite');
const resource = require('./app/middleware/resource');

module.exports = (app) => {
  if (app.config.vitePlugin && app.config.vitePlugin.devServer) {
    app.use(vite);
    app.use(resource);
  }
};
