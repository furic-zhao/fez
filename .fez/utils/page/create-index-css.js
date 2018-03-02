/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

import fancyLog from 'fancy-log'

/**
 * Nodejs路径处理
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

/* ${opts.name} 页面样式 */

    `
  return new Promise((resolve, reject) => {
    writeFile({
      directory: `src/static/styles/`,
      fileName: `${opts.directory}.${opts.fezconfig.style.compiler}`,
      data: file,
      codeType: 'css',
      success() {
        fancyLog(`创建 ${path.join(this.directory, this.fileName)} 成功`)
        resolve()
      },
      error() {
        fancyLog(`创建 ${path.join(this.directory, this.fileName)} 失败`)
        reject()
      }
    })
  })
}
