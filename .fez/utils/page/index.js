/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

import createDirectory from './create-directory'
import createIndexHtml from './create-index-html'
import createIndexJs from './create-index-js'
import createIndexCss from './create-index-css'

export default (opts) => {
  createDirectory(opts).then(() => {
    Promise.all([
      createIndexHtml(opts),
      createIndexJs(opts),
      createIndexCss(opts)
    ]).then(() => {
      opts.cb()
    })
  })
}
