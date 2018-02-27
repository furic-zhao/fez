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
import pngquant from 'imagemin-pngquant'
import imageminMozjpeg from 'imagemin-mozjpeg'

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
