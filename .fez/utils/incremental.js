/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * md5加密模块
 * https://github.com/jtblin/crypto-md5
 */
import md5 from 'crypto-md5';

/**
 * 深度遍历目录/列出目录下所有文件
 * https://www.npmjs.com/package/rd
 */
import rd from 'rd';

/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs';

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path';

/**
 * 具有一致接口、模块化、高性能等特性的 JavaScript 扩展工具库
 * https://lodash.com/
 */
import _ from 'lodash';

/**
 * gulp插件的实用函数
 * https://github.com/gulpjs/gulp-util
 */
import gutil from 'gulp-util';

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp';

/**
 * 引入 .fezconfig 配置
 */
import config from './fezconfig';


function changed(dir) {
  const manifestPath = path.resolve(`${config.paths.src.dir}/manifest.json`);

  const originManifest = {};

  const dealManifest = {};

  const diffManifest = {};

  //如果存在 manifest.json, 则加载保存
  if (fs.existsSync(manifestPath)) Object.assign(originManifest, require(manifestPath));

  //遍历目录, 根据内容 md5 加密
  rd.eachFileFilterSync(dir, (file) => {
    const relativeFile = path.relative(dir, file);
    //过滤掉 隐藏文件 和 manifest.json
    if (path.extname(file) && relativeFile !== 'manifest.json' && fs.existsSync(file)) {

      let fileData = fs.readFileSync(file);

      if (fileData) {
        Object.assign(dealManifest, {
          [relativeFile]: md5(fileData, 'hex')
        })
      }
    }

  });

  //将新的 manifest.json 保存
  fs.writeFile(manifestPath, JSON.stringify(dealManifest), (err) => {
    if (err) throw err;
  });

  //找出有变动的文件
  if (originManifest) {

    _.forEach(dealManifest, (item, index) => {
      if (originManifest[index] !== item) {
        Object.assign(diffManifest, {
          [index]: item
        });
      }
    });
  }
  return diffManifest;
}

export default (cb, delTmp) => {

  const diffManifest = changed(config.paths.tmp.dir);

  let changedFiles = [];

  gutil.log(gutil.colors.yellow('您已启用增量编译...'));

  if (!_.isEmpty(diffManifest)) {

    _.forEach(diffManifest, (item, index) => {
      changedFiles.push(`${config.paths.tmp.dir}/${index}`);

      gutil.log(`已改动 ${gutil.colors.yellow(index)}`);
    });

    return gulp.src(changedFiles, {
        base: config.paths.tmp.dir
      })
      .pipe(gulp.dest(config.paths.dist.dir))
      .on('end', () => {
        delTmp();
      });

  } else {
    gutil.log(gutil.colors.yellow('没有文件发生改动!'));
    delTmp();
    cb();
  }
}
