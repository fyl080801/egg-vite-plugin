# egg-vite-plugin

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-vite-plugin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-vite-plugin
[travis-image]: https://img.shields.io/travis/eggjs/egg-vite-plugin.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-vite-plugin
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-vite-plugin.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-vite-plugin?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-vite-plugin.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-vite-plugin
[snyk-image]: https://snyk.io/test/npm/egg-vite-plugin/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-vite-plugin
[download-image]: https://img.shields.io/npm/dm/egg-vite-plugin.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-vite-plugin

<!--
Description here.
-->

## Install

```bash
$ npm i egg-vite-plugin --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.vitePlugin = {
  enable: true,
  package: 'egg-vite-plugin',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.vitePlugin = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
