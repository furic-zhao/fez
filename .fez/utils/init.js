/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ----------------------------------
 * 《初见》
 * 于 2010年8月 郑州
 * ----------------
 * 昨夜星辰昨夜风
 * 相顾无言醉相逢
 * 身无彩凤双飞翼
 * 心有灵犀一点通
 * ----------------
 * 一直在等着你
 * 耗费了青春年华
 * 你的笑容带着风沙
 * 惊醒我迷茫的双眸
 * 你衣衫轻轻，长发飘飘
 * 陶醉于欣赏你的妩媚
 * 眉内隐藏着另一个世界
 * 幻想抱你柔然一吻
 * 缘分就此与你结在一起
 * 柔风徐徐，心意凄凄
 * 背弃了曾经的一切
 * 却在那无声的夜里
 * 看到了一生一遇的你
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
import createProject from './init/project';

export default () => {

  function initProject(cb) {
    createProject({
      name: argv.name || argv.dir,
      directory: argv.dir,
      path: argv.path,
      cb: cb,
      fezconfig: config
    });
  }

  /*****************************
   * 自动化创建新项目
   *****************************/
  gulp.task('fezinit', gulp.series(
    initProject
  ));
}
