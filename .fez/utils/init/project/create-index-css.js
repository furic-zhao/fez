/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ----------------------------------
 * 《奇舞团.致文博兄二十一岁生日》
 * 于2014年5月 360总部
 * ------------------
 * 文德升紫烟
 * 博学善前端
 * 三春花鸟语
 * 一身帅气男
 * 生逢存挚友
 * 日暮情谊远
 * 快意言几许
 * 乐富心更欢
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

  return new Promise((resolve, reject) => {
    writeFile({
      directory: `${opts.directory}/src/static/styles`,
      fileName: `index.${opts.fezconfig.style.compiler}`,
      data: file,
      codeType: 'css',
      success() {
        fancyLog(`创建 ${opts.directory}/src/static/styles/index.${opts.fezconfig.style.compiler} 成功`);
        resolve()
      },
      error() {
        fancyLog(`创建 ${opts.directory}/src/static/styles/index.${opts.fezconfig.style.compiler} 失败`);
        reject()
      }
    });
  })
}
