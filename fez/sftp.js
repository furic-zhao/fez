/* ==================================
 * @ 2017 FEZ 前端模块工程自动化构建工具
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs';

/**
 * 使用gulp通过sftp上传文件
 * https://github.com/gtg092x/gulp-sftp
 */
import sftp from 'gulp-sftp';

/**
 * 捕获错误，返回错误信息
 */
// import notify from 'gulp-notify';

export default (gulp, config) => {

    function sftpUpload() {
        let sftpConfig = Object.assign({
            "host": "xxx.xxx.xxx.xxx",
            "port": "22",
            "user": "user",
            "password": "pass",
            "remotePath": ""
        }, config.sftp);

        let distPath = config.sftp.includeHtml ? `${config.paths.dist.dir}/**/*` : [`${config.paths.dist.dir}/**/*`, `!${config.paths.dist.dir}/**/*.html`];

        return gulp.src(distPath, { base: config.paths.dist.dir })
            // .pipe(notify("Found file: <%= file.relative %>!"))
            .pipe(sftp(sftpConfig));
    }

    function gulpSeries() {
        let distDir = fs.existsSync(config.paths.dist.dir);
        if (distDir) {
            return gulp.series(
                sftpUpload
            );
        } else {
            return gulp.series(
                'dist',
                sftpUpload
            );
        }
    }

    /*****************************
     * 使用gulp 通过 SFTP 上传文件
     *****************************/
    gulp.task('sftp', gulp.series(
        gulpSeries()
    ));
};
