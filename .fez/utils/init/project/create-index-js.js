/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ----------------------------------
 * 《360WEB平台部.致测试团队负责人：刘瑾》
 * 于2014年 360年会
 * ----------------
 * 刘氏有女似桂英
 * 瑾瑜贤淑內有情
 * 英姿飒爽犹酣战
 * 雄心壮志意随风
 * 玉花含笑真龙出
 * 美人膝下万古空
 * 如逢乱世平台部
 * 花开尽献三六零
 * ================================== */

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log';

import writeFile from '../write';

export default (opts) => {
  const file = `
/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/* index 页面脚本 */

    `;

  return new Promise((resolve, reject) => {
    writeFile({
      directory: `${opts.directory}/src/views/index`,
      fileName: 'index.js',
      data: file,
      success() {
        fancyLog(`创建 ${opts.directory}/src/views/index/index.js 成功`);
        resolve()
      },
      error() {
        fancyLog(`创建 ${opts.directory}/src/views/index/index.js 失败`);
        reject()
      }
    });
  })
}
