/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * 《奇舞团.2015羊年会》
 * 于2015年2月 360总部
 * ------------------
 * 羊羊得翼升紫烟
 * 奇舞筑梦入云天
 * 万象生辉腾热血
 * 豪情千里心无限
 * 英雄联盟来欢会
 * 精兵良将坐台前
 * 欢呼雀跃满欢笑
 * 前程似锦迎新年
 * ================================== */

import createDirectory from './create-directory';

import createGulpfileBabel from './create-gulpfile.babel';
import createFezConfig from './create-fez.config';
import createBower from './create-bower';
import createPackage from './create-package';
import createShim from './create-shim';

import createIndexHtml from './create-index-html';
import createIndexJs from './create-index-js';
import createIndexCss from './create-index-css';

export default (opts) => {
  createDirectory(opts);

  createGulpfileBabel(opts);
  createFezConfig(opts);
  createBower(opts);
  createPackage(opts);
  createShim(opts);

  createIndexHtml(opts);
  createIndexJs(opts);
  createIndexCss(opts);
  opts.cb();
}
