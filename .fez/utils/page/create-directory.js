/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

import fancyLog from 'fancy-log'

import writeFile from './write'

export default (opts) => {

  let createPageFolder = new Promise((resolve, reject) => {
    writeFile({
      directory: `src/views/${opts.directory}`,
      success() {
        fancyLog(`创建 ${this.directory} 成功`)
        resolve()
      },
      error() {
        fancyLog(`创建 ${this.directory} 失败`)
        reject()
      }
    })
  })

  return new Promise((resolve, reject) => {
    createPageFolder.then(() => {
      writeFile({
        directory: `src/views/${opts.directory}/module`,
        success() {
          fancyLog(`创建 ${this.directory} 成功`)
          resolve()
        },
        error() {
          fancyLog(`创建 ${this.directory} 失败`)
          reject()
        }
      })
    })
  })
}
