'use strict';

const { createServer } = require('vite');

module.exports = async (ctx, next) => {
  const { app } = ctx;

  if (!app.viteServer) {
    app.viteServer = await (await createServer({})).listen();
  }

  await next();
};
