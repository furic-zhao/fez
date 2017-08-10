/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * gulp插件的实用函数
 * https://github.com/gulpjs/gulp-util
 */
import gutil from 'gulp-util';

import writeFile from'../write';

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
      gutil.log(`创建 ${opts.directory}/package.json 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/package.json 失败`);
    }
  });
}
