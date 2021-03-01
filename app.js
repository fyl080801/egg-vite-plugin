'use strict';

const vite = require('./app/middleware/vite');

module.exports = (app) => {
  if (app.config.vite && app.config.vite.devServer) {
    app.use(vite);
  }
};
