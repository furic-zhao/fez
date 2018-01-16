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
/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/* index 页面样式*/

 body {
   font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
   font-size: 14px;
 }

 h1 {
   font-size: 24px;
 }

 h2 {
   font-size: 18px;
 }

 h3 {
   font-size: 16px;
 }
    `;
  writeFile({
    directory: `${opts.directory}/src/static/styles`,
    fileName: `index.${opts.fezconfig.cssCompiler}`,
    data: file,
    codeType: 'css',
    success() {
      fancyLog(`创建 ${opts.directory}/src/static/styles/index.${opts.fezconfig.cssCompiler} 成功`);
    },
    error() {
      fancyLog(`创建 ${opts.directory}/src/static/styles/index.${opts.fezconfig.cssCompiler} 失败`);
    }
  });
}
