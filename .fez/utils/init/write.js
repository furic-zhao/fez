/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs';

const beauty = require('js-beautify').js_beautify;
const beautyHtml = require('js-beautify').html;
const beautyCss = require('js-beautify').css;

export default (opts) => {
  opts.codeFormat = opts.codeFormat || {};
  opts.codeType = opts.codeType || 'js';


  if (!fs.existsSync(opts.directory)) {
    fs.mkdir(opts.directory, (err) => {
      if (err) {
        if (opts.error) opts.error(err);
        return false;
      }
      if (opts.success) opts.success();
    });
  }

  if (!opts.fileName || !opts.data) return false;

  let data = '';
  if (opts.codeType === 'html') {
    data = beautyHtml(opts.data, Object.assign({

    }, opts.codeFormat));
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

  fs.writeFile(`${opts.directory}/${opts.fileName}`, data, (err) => {
    if (err) {
      if (opts.error) opts.error(err);
      return false;
    }
    if (opts.success) opts.success();
  });
};
