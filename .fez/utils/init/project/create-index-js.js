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

/* index 页面脚本 */

    `;
  writeFile({
    directory: `${opts.directory}/src/views/index`,
    fileName: 'index.js',
    data: file,
    success() {
      fancyLog(`创建 ${opts.directory}/src/views/index/index.js 成功`);
    },
    error() {
      fancyLog(`创建 ${opts.directory}/src/views/index/index.js 失败`);
    }
  });
}
