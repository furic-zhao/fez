/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * 默认 执行 研发 任务
 */
export default (gulp, config) => {
  gulp.task('default', gulp.series(
        'dev'
    ));
};
