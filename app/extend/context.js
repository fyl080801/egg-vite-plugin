'use strict';

const cheerio = require('cheerio');
const path = require('path');

const VITE = Symbol('Context#vite');

class ViteContext {
  constructor(ctx) {
    this.ctx = ctx;
    this.viteServer = this.ctx.app.viteServer;
  }

  async render(name, data) {
    if (this.viteServer) {
      const address = this.getServerAddress();
      const html = (
        await this.ctx.curl(`${this.ctx.protocol}://${address}/${name}`)
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

      this.ctx.body = await this.ctx.renderString($.html({}), data);
    } else {
      await this.ctx.render(name, data);
    }
  }

  getServerAddress() {
    const address = this.viteServer.httpServer?.address();
    if (typeof address === 'string') {
      return address;
    }

    return `${address?.address === '::' ? '0.0.0.0' : address?.address}:${
      address?.port
    }`;
  }
}

module.exports = {
  get vite() {
    if (this[VITE]) {
      return this[VITE];
    }

    this[VITE] = new ViteContext(this);

    return this[VITE];
  },
};
