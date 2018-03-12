/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

/**
 * ---------------------------------
 * 整合tinypng.com压缩src/static/tinypic目录中的图片
 * 并将压缩后的图片输出到src/static/images目录
 * ---------------------------------
 */

/**
 * nodejs中的路径处理模块
 * http://javascript.ruanyifeng.com/nodejs/path.html
 */
import path from 'path'

/**
 * 深度压缩图片
 * https://github.com/furic-zhao/gulp-fez-tinypic
 */
import fezTinyPic from 'gulp-fez-tinypic'


/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log'

/**
 * 命令行颜色
 * https://www.npmjs.com/package/chalk
 */
import chalk from 'chalk'

/**
 * 用于删除文件或目录
 * https://github.com/sindresorhus/del
 */
import del from 'del'


/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp'

import gulpCache from 'gulp-cache'

/**
 * 引入 fez.config.js 配置
 */
import config from './utils/fezconfig'

export default () => {

  function tinyImages(cb) {
    const APIKEY = config.tinypic.apikey

    if (!APIKEY) {
      fancyLog(chalk.red('未配置APIKey'))
      fancyLog(chalk.red('申请APIkey:https://tinypng.com/developers'))
      fancyLog(chalk.red('请在项目的 fez.config.js 中配置 tinypic:{apikey:\'申请的APIKEY\'}'))
      return cb()
    }

    fancyLog(chalk.yellow('已启动压缩程序...请耐心等待...'))

    return gulp.src(`./src/static/tinypic/**/*.{png,jpg,jpeg}`)
      .pipe(gulpCache(fezTinyPic(APIKEY)))
      .pipe(gulp.dest('./src/static/images'))
      .on('data', (file) => {
        const tinyFile = path.relative(process.cwd(), file.history[1])
        fancyLog(chalk.green(`成功压缩图片：${tinyFile}`))
      })
      .on('end', () => {
        if (!config.tinypic.keep) del('./src/static/tinypic/*')
      })
  }

  /*********************************
   * 整合 tinypng.com 深度无损压缩图片
   *********************************/
  gulp.task('tinypic', gulp.series(
    tinyImages
  ))
}
