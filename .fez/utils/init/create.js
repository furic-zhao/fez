/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

import createDirectory from './create/create-directory';

import createGulpfileBabel from './create/create-gulpfile.babel';
import createFezConfig from './create/create-fez.config';
import createBower from './create/create-bower';
import createPackage from './create/create-package';
import createShim from './create/create-shim';

import createIndexHtml from './create/create-index-html';
import createIndexJs from './create/create-index-js';
import createIndexCss from './create/create-index-css';

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
