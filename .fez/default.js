/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp';

/**
 * 默认 执行 研发 任务
 */
export default () => {
  gulp.task('default', gulp.series(
    'dev'
  ));
};
