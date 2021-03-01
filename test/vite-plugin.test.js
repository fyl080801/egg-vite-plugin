'use strict';

const mock = require('egg-mock');

describe('test/vite-plugin.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/vite-plugin-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, vitePlugin')
      .expect(200);
  });
});
