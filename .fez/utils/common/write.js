/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

/**
 * Nodejs文件处理
 * http://nodejs.cn/api/fs
 */
import fs from 'fs'

/**
 * 创建目录
 */
import mkdirp from './mkdirp'

const beauty = require('js-beautify').js_beautify
const beautyHtml = require('js-beautify').html
const beautyCss = require('js-beautify').css

export default (opts) => {
  opts.codeFormat = opts.codeFormat || {};
  opts.codeType = opts.codeType || 'js'

  /**
   * 目录不存在则创建目录
   */
  if (!fs.existsSync(opts.directory)) {
    mkdirp.sync(opts.directory);
    opts.success();
  }

  if (!opts.fileName || !opts.data) return false;

  /**
   * 文件内容
   */
  let fileContent = ''
  if (opts.codeType === 'html') {
    fileContent = beautyHtml(opts.data, Object.assign({}, opts.codeFormat));
  } else if (opts.codeType === 'js') {
    fileContent = beauty(opts.data, Object.assign({
      indent_size: 4
    }, opts.codeFormat));
  } else if (opts.codeType === 'css') {
    fileContent = beautyCss(opts.data, Object.assign({
      indent_size: 4
    }, opts.codeFormat));
  } else if (opts.codeType === 'none') {
    fileContent = opts.data;
  }

  /**
   * 创建文件
   */
  fs.writeFile(`${opts.directory}/${opts.fileName}`, fileContent, (err) => {
    if (err) {
      if (opts.error) opts.error(err);
      return false;
    }
    if (opts.success) opts.success();
  });
};
