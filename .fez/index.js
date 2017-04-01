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
 * gulp插件的实用函数
 * https://github.com/gulpjs/gulp-util
 */
import gutil from 'gulp-util';

/**
 * 研发任务
 * gulp dev
 */
import gulpDev from './dev'; //研发任务

/**
 * 生产任务
 * gulp dist
 */
import gulpDist from './dist'; //生产任务

/**
 * 通过sftp将编译后的dist发布到服务器（依赖dist任务）
 * gulp sftp
 */
import gulpSftp from './sftp';

/**
 * 压缩 dist 目录并生成zip文件
 * gulp zip
 */
import gulpZip from './zip';

/**
 * svg 转换成字体
 * gulp svg2icon
 */
import gulpSvg2Icon from './svg2icon';

/**
 * 默认任务(执行研发任务)
 * gulp
 */
import gulpDefault from './default';

/**
 * 获取 .fezrc 配置文件
 * https://github.com/dominictarr/rc
 * 每个项目下面的rc配置文件 会覆盖此处的默认配置
 */

export default () => {
    gutil.log("---------------------------------------");
    gutil.log(gutil.colors.cyan("* 欢迎使用 FEZ 前端模块化工程开发框架 *"));
    gutil.log("---------------------------------------");
    gulpDev();
    gulpDist();
    gulpDefault();
    gulpSftp();
    gulpZip();
    gulpSvg2Icon();
};
