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
import fancyLog from 'fancy-log';

/**
 * 命令行颜色
 * https://github.com/doowb/ansi-colors
 */
import ansiColors from 'ansi-colors';

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
 * 压缩 dist 目录并生成zip文件 任务
 * gulp zip
 */
import gulpZip from './zip';

/**
 * svg 转换成字体 任务
 * gulp svg2icon
 */
import gulpSvg2Icon from './svg2icon';

/**
 * 构建 dist 目录中的上线文件多终端测试环境 任务
 */
import gulpTest from './test';

/**
 * 自动合并雪碧图
 */
import gulpSprite from './sprite';

/**
 * 自动创建项目页面
 */
import initPage from './page';

/**
 * 压缩字体
 */
import fontMin from './fontmin';

/**
 * 整合tinypng无损压缩图片
 */
import tinyPic from './tinypic';


/**
 * 默认任务(执行研发任务)
 * gulp
 */
import gulpDefault from './default';

export default () => {
  fancyLog("---------------------------------------");
  fancyLog(ansiColors.cyan("* 欢迎使用 FEZ 前端模块化工程开发框架 *"));
  fancyLog("---------------------------------------");
  gulpDev();
  gulpDist();
  gulpDefault();
  gulpSftp();
  gulpZip();
  gulpSvg2Icon();
  gulpTest();
  gulpSprite();
  initPage();
  fontMin();
  tinyPic();
};
