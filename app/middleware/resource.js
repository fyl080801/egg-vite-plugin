'use strict';

const { createProxyMiddleware } = require('http-proxy-middleware');
const k2Connect = require('koa2-connect');
const { pathToRegexp } = require('path-to-regexp');
const { getServerAddress, isRegexp } = require('../utils/helper');

module.exports = async (ctx, next) => {
  const { app, path, protocol } = ctx;
  const { targets = [] } = app.config.vitePlugin;

  for (const target of targets) {
    if ((isRegexp(target) ? target : pathToRegexp(target)).test(path)) {
      await k2Connect(
        createProxyMiddleware({
          target: `${protocol}://${getServerAddress(app.viteServer)}`,
          changeOrigin: true,
        })
      )(ctx, next);

      break;
    }
  }

  await next();
};
