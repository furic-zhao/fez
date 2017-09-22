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

export default {

}

    `;
  writeFile({
    directory: `${opts.directory}`,
    fileName: 'fez.config.js',
    data: file,
    success() {
      gutil.log(`创建 ${opts.directory}/fez.config.js 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/fez.config.js 失败`);
    }
  });
}
