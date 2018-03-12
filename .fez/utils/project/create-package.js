/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

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
{
  "name": "${opts.name}",
  "version": "1.0.0",
  "description": "FEZ自动化创建统一结构项目",
  "main": "fez.config.js",
  "scripts": {},
  "repository": {
    "type": "git",
    "url": "git+https://github.com/furic-zhao/fez.git"
  },
  "keywords": [
    "FEZ",
    "前端工程",
    "前端模块化",
    "前端自动化"
  ],
  "author": "furic-zhao",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/furic-zhao/fez/issues"
  },
  "homepage": "https://github.com/furic-zhao/fez#readme"
}

    `
  return new Promise((resolve, reject) => {
    writeFile({
      directory: `${opts.directory}`,
      fileName: 'package.json',
      data: file,
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
