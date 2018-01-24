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
 * 深度压缩图片
 * https://github.com/furic-zhao/gulp-fez-tinypic
 */
import fezTinyPic from 'gulp-fez-tinypic';


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
 * 用于删除文件或目录
 * https://github.com/sindresorhus/del
 */
import del from 'del';


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

  function compressImgs(cb) {
    const APIKEY = config.tinypic.apikey;

    if (!APIKEY) {
      fancyLog(ansiColors.red('未配置APIKey'));
      fancyLog(ansiColors.red('申请APIkey:https://tinypng.com/developers'));
      fancyLog(ansiColors.red('请在项目的 fez.config.js 中配置 tinypic:{apikey:\'申请的APIKEY\'}'));
      return cb();
    }

    fancyLog(ansiColors.yellow('已启动压缩程序...请耐心等待...'));

    return gulp.src(`./src/static/tinypic/**/*.{png,jpg,jpeg}`)
      .pipe(fezTinyPic(APIKEY))
      .pipe(gulp.dest('./src/static/images/'))
      .on('data', (file) => {
        const tinyFile = path.relative(process.cwd(), file.history[1]);
        fancyLog(ansiColors.green(`成功压缩图片：${tinyFile}`));
      })
      .on('end', () => {
        if (!config.tinypic.keep) del('./src/static/tinypic/*');
      });
  }

  /**************************************
   * 整合 tinypng.com 深度无损压缩图片
   **************************************/
  gulp.task('tinypic', gulp.series(
    compressImgs
  ));
};
