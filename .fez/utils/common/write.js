/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

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
    mkdirp(opts.directory, (err) => {
      if (err) {
        if (opts.error) opts.error(err);
        return false;
      }
      if (opts.success) opts.success();
    });
  }

  if (!opts.fileName || !opts.data) return false;

  let data = ''
  if (opts.codeType === 'html') {
    data = beautyHtml(opts.data, Object.assign({}, opts.codeFormat));
  } else if (opts.codeType === 'js') {
    data = beauty(opts.data, Object.assign({
      indent_size: 4
    }, opts.codeFormat));
  } else if (opts.codeType === 'css') {
    data = beautyCss(opts.data, Object.assign({
      indent_size: 4
    }, opts.codeFormat));
  } else if (opts.codeType === 'none') {
    data = opts.data;
  }

  /**
   * 创建文件
   */
  fs.writeFile(`${opts.directory}/${opts.fileName}`, data, (err) => {
    if (err) {
      if (opts.error) opts.error(err);
      return false;
    }
    if (opts.success) opts.success();
  });
};
