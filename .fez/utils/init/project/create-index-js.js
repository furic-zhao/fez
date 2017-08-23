/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * gulp插件的实用函数
 * https://github.com/gulpjs/gulp-util
 */
import gutil from 'gulp-util';

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
      gutil.log(`创建 ${opts.directory}/src/views/index/index.js 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/views/index/index.js 失败`);
    }
  });
}
