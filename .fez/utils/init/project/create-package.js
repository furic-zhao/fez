/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ----------------------------------
 * 《360女神节.致宅男程序员》
 * 于2013年7月 360总部大厦
 * ----------------------
 * 百花争艳三六零
 * 宅男倾慕美眉容
 * 奈何追逐终是愁
 * 妹纸如花花似梦
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

  return new Promise((resolve, reject) => {
    writeFile({
      directory: `${opts.directory}`,
      fileName: 'package.json',
      data: file,
      success() {
        fancyLog(`创建 ${opts.directory}/package.json 成功`);
        resolve()
      },
      error() {
        fancyLog(`创建 ${opts.directory}/package.json 失败`);
        reject()
      }
    });
  })
}
