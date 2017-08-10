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

/* index 页面样式 写在此文件中 */

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
    fileName: 'index.less',
    data: file,
    codeType: 'css',
    success() {
      gutil.log(`创建 ${opts.directory}/src/static/styles/index.less 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/static/styles/index.less 失败`);
    }
  });
}
