/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ----------------------------------
 * 《奇舞之歌》
 * 晴空万里，深远辽阔
 * 轻轻的风，淡淡的云
 * 翱翔的憧憬，激起我们内心的火热
 * 想唱就唱，想舞就舞
 * 美丽的景，美丽的梦
 * 绽放的青春，谱写绚丽的奇舞之歌
 * ================================== */

import createDirectory from './create-directory'
import createIndexHtml from './create-index-html'
import createIndexJs from './create-index-js'
import createIndexCss from './create-index-css'

export default (opts) => {
  createDirectory(opts)
  createIndexHtml(opts)
  createIndexJs(opts)
  createIndexCss(opts)
  opts.cb()
}
