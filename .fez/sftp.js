/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs'

/**
 * 使用gulp通过sftp上传文件
 * https://github.com/gtg092x/gulp-sftp
 */
import sftp from 'gulp-fez-sftp'

/**
 * 捕获错误，返回错误信息
 */
// import notify from 'gulp-notify'

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp'

/**
 * 引入 fez.config.js 配置
 */
import config from './utils/fezconfig'

export default () => {

  function sftpUpload() {
    const sftpConfig = Object.assign({
      "host": "xxx.xxx.xxx.xxx",
      "port": "22",
      "user": "user",
      "password": "pass",
      "remotePath": ""
    }, config.sftp)

    const distPath = config.sftp.includeHtml ? `${config.paths.dist.dir}/**/*` : [`${config.paths.dist.dir}/**/*`, `!${config.paths.dist.dir}/**/*.html`]

    return gulp.src(distPath, { base: config.paths.dist.dir })
      // .pipe(notify("Found file: <%= file.relative %>!"))
      .pipe(sftp(sftpConfig))
  }

  function gulpSeries() {
    const distDir = fs.existsSync(config.paths.dist.dir)

    if (distDir) {
      return gulp.series(
        sftpUpload
      )
    } else {
      return gulp.series(
        'dist',
        sftpUpload
      )
    }
  }

  /*******************************
   * 通过 SFTP 发布上线或部署静态资源
   *******************************/
  gulp.task('sftp', gulp.series(
    gulpSeries()
  ))
}
