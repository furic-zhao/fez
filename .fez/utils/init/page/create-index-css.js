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

/* ${opts.name} 页面样式 */

    `;

  return new Promise((resolve, reject) => {
    writeFile({
      directory: `src/static/styles/`,
      fileName: `${opts.directory}.${opts.fezconfig.style.compiler}`,
      data: file,
      codeType: 'css',
      success() {
        fancyLog(`创建 src/static/styles/${opts.directory}.${opts.fezconfig.style.compiler} 成功`);
        resolve()
      },
      error() {
        fancyLog(`创建 src/static/styles/${opts.directory}.${opts.fezconfig.style.compiler} 失败`);
        reject()
      }
    });
  })
}
