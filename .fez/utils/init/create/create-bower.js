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
  "description": "使用Bower管理${opts.name}第三方框架库",
  "main": "",
  "license": "MIT",
  "homepage": "",
  "private": true,
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {

  },
  "overrides": {

  }
}
    `;
  writeFile({
    directory: `${opts.directory}`,
    fileName: 'bower.json',
    data: file,
    success() {
      gutil.log(`创建 ${opts.directory}/bower.json 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/bower.json 失败`);
    }
  });
}
