/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

/**
 * ---------------------------------
 * 压缩dist目录并生成zip文件
 * ---------------------------------
 */

/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs'

/**
 * 使用gulp 压缩 文件
 * https://github.com/sindresorhus/gulp-zip
 */
import zip from 'gulp-zip'

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

  function zipDist() {
    return gulp.src(`${config.paths.dist.dir}/**/*`)
      .pipe(zip('dist.zip'))
      .pipe(gulp.dest('./'))
  }

  function taskZip() {
    const distDir = fs.existsSync(config.paths.dist.dir)

    if (distDir) {
      return gulp.series(
        zipDist
      )
    } else {
      return gulp.series(
        'dist',
        zipDist
      )
    }
  }

  gulp.task('zip', gulp.series(
    taskZip()
  ))
}
