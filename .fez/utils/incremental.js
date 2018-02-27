/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/* ------------------------
 * FEZ增量编译
 * 发布时只生成改动过的文件
 * ------------------------ */

/**
 * md5加密模块
 * https://github.com/jtblin/crypto-md5
 */
import md5 from 'crypto-md5'

/**
 * 深度遍历目录/列出目录下所有文件
 * https://www.npmjs.com/package/rd
 */
import rd from 'rd'

/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs'

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path'

/**
 * 具有一致接口、模块化、高性能等特性的 JavaScript 扩展工具库
 * https://lodash.com/
 */
import _ from 'lodash'

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log'

/**
 * 命令行颜色
 * https://www.npmjs.com/package/chalk
 */
import chalk from 'chalk'

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp'

/**
 * 引入 .fezconfig 配置
 */
import config from './fezconfig'


function changed(dir) {
  const manifestPath = path.resolve(`${config.paths.src.dir}/manifest.json`)

  const originManifest = {}

  const dealManifest = {}

  const diffManifest = {}

  //如果存在 manifest.json, 则加载保存
  if (fs.existsSync(manifestPath)) Object.assign(originManifest, require(manifestPath))

  //遍历目录, 根据内容 md5 加密
  rd.eachFileFilterSync(dir, (file) => {
    const relativeFile = path.relative(dir, file)
    //过滤掉 隐藏文件 和 manifest.json
    if (path.extname(file) && relativeFile !== 'manifest.json' && fs.existsSync(file)) {

      let fileData = fs.readFileSync(file)

      if (fileData) {
        Object.assign(dealManifest, {
          [relativeFile]: md5(fileData, 'hex')
        })
      }
    }

  });

  //将新的 manifest.json 保存
  fs.writeFile(manifestPath, JSON.stringify(dealManifest), (err) => {
    if (err) throw err
  })

  //找出有变动的文件
  if (originManifest) {

    _.forEach(dealManifest, (item, index) => {
      if (originManifest[index] !== item) {
        Object.assign(diffManifest, {
          [index]: item
        })
      }
    })
  }
  return diffManifest
}

export default (cb, delTmp) => {

  const diffManifest = changed(config.paths.tmp.dir)

  let changedFiles = []

  fancyLog(chalk.yellow('您已启用增量编译...'))

  if (!_.isEmpty(diffManifest)) {

    _.forEach(diffManifest, (item, index) => {
      changedFiles.push(`${config.paths.tmp.dir}/${index}`)

      fancyLog(`已改动 ${chalk.yellow(index)}`)
    })

    return gulp.src(changedFiles, {
        base: config.paths.tmp.dir
      })
      .pipe(gulp.dest(config.paths.dist.dir))
      .on('end', () => {
        delTmp()
      })

  } else {
    fancyLog(chalk.yellow('没有文件发生改动!'))
    delTmp()
    cb()
  }
}

/* ============
 * 《红尘忆事》
 * 悠悠十载铅华梦
 * 世间万象本是空
 * 心有菩提别样缘
 * 随缘随遇亦随风
 * ============ */
