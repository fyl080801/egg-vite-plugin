'use strict';

const SERVER = Symbol('application#vite-server');

module.exports = {
  get viteServer() {
    return this[SERVER];
  },
  set viteServer(value) {
    this[SERVER] = value;
  },
};
