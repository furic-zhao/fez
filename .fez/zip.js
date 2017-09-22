/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs';

/**
 * 使用gulp 压缩 文件
 * https://github.com/sindresorhus/gulp-zip
 */
import zip from 'gulp-zip';

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp';

/**
 * 引入 .fezconfig 配置
 */
import config from './utils/fezconfig';

export default () => {

  function distZip() {
    return gulp.src(`${config.paths.dist.dir}/**/*`)
      .pipe(zip('dist.zip'))
      .pipe(gulp.dest('./'));
  }

  function gulpSeries() {
    const distDir = fs.existsSync(config.paths.dist.dir);

    if (distDir) {
      return gulp.series(
        distZip
      );
    } else {
      return gulp.series(
        'dist',
        distZip
      );
    }
  }

  /**
   * 压缩 dist 目录为 .zip 包
   */
  gulp.task('zip', gulp.series(
    gulpSeries()
  ));
}
