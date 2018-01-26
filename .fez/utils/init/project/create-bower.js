/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ----------------------------------
 * 《360集体婚礼.致WEB平台部几个小伙伴》
 * 于2014.9月 360总部
 * -----------------
 * 情似星辰向明月
 * 夜夜流光相皎洁
 * 相思切盼黎明路
 * 滔滔江水意不绝
 * 日出金光东升起
 * 映入殿堂花相悦
 * 钟情不负爱威名
 * 执子之手永不懈
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
  "dependencies": {},
  "overrides": {}
}
    `;
  writeFile({
    directory: `${opts.directory}`,
    fileName: 'bower.json',
    data: file,
    success() {
      fancyLog(`创建 ${opts.directory}/bower.json 成功`);
    },
    error() {
      fancyLog(`创建 ${opts.directory}/bower.json 失败`);
    }
  });
}
