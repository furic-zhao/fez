/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log'

import iconfont from 'gulp-iconfont'

import iconfontCss from 'gulp-iconfont-css'

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

  function svg2icon() {
    const runTimestamp = Math.round(Date.now() / 1000)

    return gulp.src(`${config.svgIcons.src}**/*.svg`)
      .pipe(iconfontCss({
        fontName: config.svgIcons.fontName,
        path: `${config.svgIcons.src}templates/_icons.css`,
        targetPath: config.svgIcons.targetPath,
        fontPath: config.svgIcons.fontPath
      }))
      .pipe(iconfont({
        fontName: config.svgIcons.fontName,
        /**
         * normalize和fontheight用于解决生成的图表变形问题，网上的土方法，但是好使
         */
        // normalize: true,
        // fontHeight:1001,
        // fixedWidth: true,
        // centerHorizontally: true,
        prependUnicode: true,
        formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
        timestamp: runTimestamp,
      }))
      .on('glyphs', (glyphs, options) => {
        // CSS templating, e.g.
        fancyLog(glyphs, options)
      })
      .pipe(gulp.dest(config.svgIcons.dist))
  }

  /******************
   * SVG 转换 字体文件
   ******************/
  gulp.task('svg2icon', gulp.series(
    svg2icon
  ))
}
