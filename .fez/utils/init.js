/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * 解析参数
 * https://www.npmjs.com/package/minimist
 */
import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));

/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs';

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp';

/**
 * 引入 .fezconfig 配置
 */
import config from './fezconfig';

/**
 * 创建初始化相关文件和目录
 */
import create from './init/create';

export default () => {

  function initProject(cb) {
    create({
      name: argv.name || argv.dir,
      directory: argv.dir,
      path: argv.path,
      cb: cb
    });
  }

  /*****************************
   * 使用gulp 通过 SFTP 上传文件
   *****************************/
  gulp.task('init', gulp.series(
    initProject
  ));
}
