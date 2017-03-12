/* ==================================
 * @ 2017 FEZ 前端模块工程自动化构建工具
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
