/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
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
