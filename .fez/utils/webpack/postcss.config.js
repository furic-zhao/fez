/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

/**
 * ---------------------------------
 * postcss配置
 * ---------------------------------
 */

module.exports = {
  "plugins": {
    "autoprefixer": Object.assign({}, require('../fezconfig').default.style.autoprefixerOptions)
  }
}
