/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * nodejs中的路径处理模块
 * http://javascript.ruanyifeng.com/nodejs/path.html
 */
import path from 'path';

/**
 * 压缩ttf
 * https://github.com/furic-zhao/gulp-fez-fontmin
 */
import fontMin from 'gulp-fez-fontmin';

/**
 * 压缩ttf 生成woff2
 * https://github.com/nfroidure/gulp-ttf2woff2
 */
import ttf2woff2 from 'gulp-ttf2woff2';

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log';

/**
 * 命令行颜色
 * https://github.com/doowb/ansi-colors
 */
import ansiColors from 'ansi-colors';

/**
 * 使用glob模式过滤原始文件的子集来处理原始文件
 * https://github.com/sindresorhus/gulp-filter
 */
import filter from 'gulp-filter';

/**
 * 重命名
 * https://github.com/hparra/gulp-rename
 */
import rename from 'gulp-rename';

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp';

/**
 * 引入 .fezconfig 配置
 */
import config from './utils/fezconfig';

export default () => {

  function minFonts(cb) {
    const fontText = config.minFonts;

    if (!fontText) {
      fancyLog(ansiColors.red('未配置特殊字体文字\n请在项目的 fez.config.js 中配置minFonts:\`特殊字体文字内容\`'));
      return cb();
    }

    let creatFiles = [];

    const cssFilter = filter('**/*.css', {
      restore: true
    });

    return gulp.src(`./src/static/ttf/*.ttf`)
      .pipe(fontMin({
        text: fontText,
        fontPath: '../fonts/'
      }))
      .pipe(ttf2woff2({ clone: true }))
      .pipe(cssFilter)
      .pipe(rename({ extname: `.${config.style.compiler}` }))
      .pipe(cssFilter.restore)
      .pipe(gulp.dest('./src/static/fonts/'))
      .on('data', (file) => {
        creatFiles.push(path.basename(file.history[1].replace('.css', `.${config.style.compiler}`)));
      })
      .on('end', () => {
        for (let item of creatFiles) {
          fancyLog(`成功生成:./src/static/fonts/${item}`);
        }
      });
  }

  function gulpSeries() {
    return gulp.series(
      minFonts
    );
  }

  /**************************************
   * 使用gulp 压缩 tff 生成网页所用字体格式
   **************************************/
  gulp.task('fontmin', gulp.series(
    gulpSeries()
  ));
};
