/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log'

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path'

import writeFile from './write'

export default (opts) => {
  const file = `
/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

export default {

}

    `
  writeFile({
    directory: `${opts.directory}`,
    fileName: 'fez.config.js',
    data: file,
    success() {
      fancyLog(`创建 ${path.join(this.directory, this.fileName)} 成功`)
    },
    error() {
      fancyLog(`创建 ${path.join(this.directory, this.fileName)} 失败`)
    }
  })
}
