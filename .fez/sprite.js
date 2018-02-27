/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp'

/**
 * 命令行日志
 * https://www.npmjs.com/package/chalk
 */
import fancyLog from 'fancy-log'

/**
 * 命令行颜色
 * https://www.npmjs.com/package/chalk
 */
import chalk from 'chalk'

/**
 * 转换为数据流
 * https://www.npmjs.com/package/vinyl-buffer
 */
import buffer from 'vinyl-buffer'

/**
 * 合并数据流
 * https://www.npmjs.com/package/merge-stream
 */
import merge from 'merge-stream'

/**
 * 合并雪碧图并生成样式
 * https://github.com/twolfson/gulp.spritesmith
 */
import spritesmith from 'gulp.spritesmith'

/**
 * 引入 fez.config.js 配置
 */
import config from './utils/fezconfig'

export default () => {

  function sprite() {

    const spriteData = gulp.src(config.sprites.src)
      .pipe(spritesmith(Object.assign({}, config.sprites.options)))

    const imgStream = spriteData.img
      .pipe(buffer())
      .pipe(gulp.dest(config.sprites.dest.image))
      .on('end', () => {
        fancyLog(chalk.green("已完成雪碧图合并，雪碧图保存目录："))
        fancyLog(chalk.yellow(config.sprites.dest.image))
      })

    const cssStream = spriteData.css
      .pipe(gulp.dest(config.sprites.dest.css))
      .on('end', () => {
        fancyLog(chalk.green("已生成雪碧图样式，雪碧图样式保存目录："))
        fancyLog(chalk.yellow(config.sprites.dest.css))
      })

    return merge(imgStream, cssStream)
  }

  /*************************
   * 自动化合并雪碧图并生成样式
   *************************/
  gulp.task('sprite', gulp.series(
    sprite
  ))
}
