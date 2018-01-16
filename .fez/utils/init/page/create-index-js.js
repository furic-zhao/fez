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

/* ${opts.name} 页面脚本 */

    `;
  writeFile({
    directory: `src/views/${opts.directory}`,
    fileName: 'index.js',
    data: file,
    success() {
      fancyLog(`创建 src/views/${opts.directory}/index.js 成功`);
    },
    error() {
      fancyLog(`创建 src/views/${opts.directory}/index.js 失败`);
    }
  });
}
