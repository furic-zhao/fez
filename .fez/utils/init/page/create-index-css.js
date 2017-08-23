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

/* ${opts.name} 页面样式 */

    `;
  writeFile({
    directory: `src/static/styles/`,
    fileName: `${opts.directory}.${opts.fezconfig.cssCompiler}`,
    data: file,
    codeType: 'css',
    success() {
      gutil.log(`创建 src/static/styles/${opts.directory}.${opts.fezconfig.cssCompiler} 成功`);
    },
    error() {
      gutil.log(`创建 src/static/styles/${opts.directory}.${opts.fezconfig.cssCompiler} 失败`);
    }
  });
}
