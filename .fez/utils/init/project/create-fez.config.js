/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ----------------------------------
 * 《致奇舞团.郝黎/孙尧 新婚》
 * 于 2014.9月 360总部
 * ------------------
 * 孙家有子乐陶陶
 * 聪颖文思似帝尧
 * 黎明嫁临天子意
 * 情定良辰恩爱好
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

export default {

}

    `;

  return new Promise((resolve, reject) => {
    writeFile({
      directory: `${opts.directory}`,
      fileName: 'fez.config.js',
      data: file,
      success() {
        fancyLog(`创建 ${opts.directory}/fez.config.js 成功`);
        resolve()
      },
      error() {
        fancyLog(`创建 ${opts.directory}/fez.config.js 失败`);
        reject()
      }
    });
  })
}
