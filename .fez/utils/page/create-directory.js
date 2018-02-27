/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

import fancyLog from 'fancy-log'

import writeFile from './write'

export default (opts) => {

  writeFile({
    directory: `src/views/${opts.directory}`,
    success() {
      fancyLog(`创建 ${this.directory} 成功`)
    },
    error() {
      fancyLog(`创建 ${this.directory} 失败`)
    }
  })

  writeFile({
    directory: `src/views/${opts.directory}/module`,
    success() {
      fancyLog(`创建 ${this.directory} 成功`)
    },
    error() {
      fancyLog(`创建 ${this.directory} 失败`)
    }
  })
}
