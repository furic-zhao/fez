/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log';

import writeFile from '../write';

export default (opts) => {
  const file = `
{
  "name": "${opts.name}",
  "version": "",
  "description": "",
  "keywords": "",
  "homepage": "",
  "license": "MIT",
  "author": "",
  "main": "",
  "scripts": {},
  "directories": {},
  "dependencies": {},
  "devDependencies": {},
  "browserify": {
    "transform": [
      "browserify-shim"
    ]
  },
  "browserify-shim": "./shim.js"
}
    `;
  writeFile({
    directory: `${opts.directory}`,
    fileName: 'package.json',
    data: file,
    success() {
      fancyLog(`创建 ${opts.directory}/package.json 成功`);
    },
    error() {
      fancyLog(`创建 ${opts.directory}/package.json 失败`);
    }
  });
}
