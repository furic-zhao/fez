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

const folder = [
  'src/',
  'src/lib/',
  'src/static/',
  'src/static/fonts/',
  'src/static/images/',
  'src/static/styles/',
  'src/views/',
  'src/views/index/',
  'src/views/index/module/',
  'src/views/public/',
  'src/views/public/module/',
  'src/views/public/utils/'
]

export default (opts) => {

  writeFile({
    directory: `${opts.directory}`,
    success() {
      fancyLog(`创建 ${opts.directory} 成功`)
    },
    error() {
      fancyLog(`创建 ${opts.directory} 失败`)
    }
  })

  for (let item of folder) {
    writeFile({
      directory: path.join(opts.directory, item),
      success() {
        fancyLog(`创建 ${this.directory} 成功`)
      },
      error() {
        fancyLog(`创建 ${this.directory} 失败`)
      }
    })
  }
}

