/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path'

/**
 * 引入 fez.config.js 配置
 */
import config from '../fezconfig'

export default {
  js(pathName = '') {
    return path.join('static/js/', pathName)
  },
  css(pathName = '') {
    return path.join('static/css/', pathName)
  },
  images(pathName = '') {
    return path.join('static/images/', pathName)
  },
  fonts(pathName = '') {
    return path.join('static/fonts/', pathName)
  },
  media(pathName = '') {
    return path.join('static/media/', pathName)
  },
  dev(pathName = '') {
    return path.join(process.cwd(), config.paths.dev.dir)
  },
  dist(pathName = '') {
    return path.join(process.cwd(), config.paths.tmp.dir)
  }
}
