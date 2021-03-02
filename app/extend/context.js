'use strict';

const cheerio = require('cheerio');
const path = require('path');

module.exports = {
  get vite() {
    const getServerAddress = (server) => {
      const address = server.httpServer.address();

      if (typeof address === 'string') {
        return address;
      }

      const ip = (address && address.address) || '0.0.0.0';

      const port = (address && address.port) || 3000;

      return `${ip === '::' ? '0.0.0.0' : ip}:${port}`;
    };

    return {
      render: async (name, data) => {
        if (this.app.viteServer) {
          const address = getServerAddress(this.app.viteServer);

          const html = (
            await this.curl(`${this.protocol}://${path.join(address, name)}`)
          ).data.toString();

          const $ = cheerio.load(html, {});

          $('script').each((_idx, elm) => {
            const child = $(elm);
            const src = child.attr('src');
            if (
              src &&
              !src.startsWith('http:') &&
              !src.startsWith('https:') &&
              !src.startsWith('//')
            ) {
              child.attr('src', `//${path.join(address, src)}`);
            }
          });

          this.body = await this.renderString($.html({}), data);
        } else {
          return await this.render(name, data);
        }
      },
    };
  },
};
