/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

/**
 * ---------------------------------
 * 压缩src/static/images目录中的图片
 * ---------------------------------
 */

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path'

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp'

import gulpCache from 'gulp-cache'

/**
 * 压缩图片
 * https://github.com/sindresorhus/gulp-imagemin
 */
import imagemin from 'gulp-imagemin'
import pngquant from 'imagemin-pngquant' // 压缩png
import imageminMozjpeg from 'imagemin-mozjpeg' // 压缩jpg/jpeg

/**
 * 引入 fez.config.js 配置
 */
import config from './utils/fezconfig'

export default () => {

  function imageMin() {
    return gulp.src(path.join(config.paths.src.img, '**/*.{png,jpg,jpeg,gif}'))
      .pipe(gulpCache(imagemin([
        pngquant(),
        imageminMozjpeg({
          quality: config.imagemin.jpg.quality
        })
      ], {
        verbose: true
      })))
      .pipe(gulp.dest(config.paths.src.img))
  }

  gulp.task('imagemin', gulp.series(
    imageMin
  ))
}
