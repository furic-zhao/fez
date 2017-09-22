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

  writeFile({
    directory: `src/views/${opts.directory}`,
    success() {
      gutil.log(`创建 src/views/${opts.directory} 成功`);
    },
    error() {
      gutil.log(`创建 src/views/${opts.directory} 失败`);
    }
  });

  writeFile({
    directory: `src/views/${opts.directory}/module`,
    success() {
      gutil.log(`创建 src/views/${opts.directory}/module 成功`);
    },
    error() {
      gutil.log(`创建 src/views/${opts.directory}/module 失败`);
    }
  });
}
