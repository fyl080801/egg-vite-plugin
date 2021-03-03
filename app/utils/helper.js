'use strict';

exports.getServerAddress = (server) => {
  const address = server.httpServer.address();

  if (typeof address === 'string') {
    return address;
  }

  const ip = (address && address.address) || '0.0.0.0';

  const port = (address && address.port) || 3000;

  return `${ip === '::' ? '0.0.0.0' : ip}:${port}`;
};

exports.isRegexp = (target) => {
  return Object.prototype.toString.call(target) === '[object RegExp]';
};
