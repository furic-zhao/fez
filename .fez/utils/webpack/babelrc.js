/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

/**
 * ---------------------------------
 * 获取.babelrc配置
 * ---------------------------------
 */

let babelrc = require('rc')('babel', {})
delete babelrc._
delete babelrc.config
delete babelrc.configs

export default babelrc
