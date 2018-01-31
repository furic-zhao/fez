/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path';

/**
 * 只对发生更改的 js 文件进行语法检测
 * https://github.com/contra/gulp-cached
 */
import cache from 'gulp-cached';

/**
 * 编译出现异常不退出监听(针对gulp的watch监听)
 */
import plumber from 'gulp-plumber';

/**
 * 捕获错误，返回错误信息
 */
import notify from 'gulp-notify';

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp';

/**
 * gulp条件控制
 * https://github.com/robrich/gulp-if
 */
import gulpif from 'gulp-if';

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log';

import browserify from 'browserify';
import source from 'vinyl-source-stream';
import envify from 'envify/custom';
import browserifyShim from 'browserify-shim';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';


/**
 * 提高browserify 的处理效率
 * https://github.com/substack/watchify
 */
import watchify from 'watchify';

/**
 * borwserify 支持 require handlebars模板
 * https://github.com/epeli/node-hbsfy
 */
import hbsfy from 'hbsfy';

/**
 * browserify 处理多文件
 * https://github.com/isaacs/node-glob
 */
import glob from 'glob';

/**
 * 加入对es6的支持
 */
import babelify from 'babelify';

/**
 * borwserify 支持 require jade 模板
 * https://github.com/sidorares/pugify
 */
import pugify from 'pugify';

/**
 * borwserify 支持 require css样式
 * https://github.com/davidguttman/cssify
 */
import cssify from 'browserify-css';

/**
 * borwserify 支持 require less样式
 * https://github.com/dstokes/lessify
 */
import lessify from 'lessify';

/**
 * 条件注释/主要区分开发和上线环境，是否加载mock数据
 */
import preprocessify from 'preprocessify';

/**
 * 在browserify中编译vue代码
 */
import vueify from 'vueify';

/**
 * js代码语法检测
 * https://github.com/spalger/gulp-jshint
 */
import jshint from 'gulp-jshint';

/**
 * 去掉console代码
 */
import stripDebug from 'gulp-strip-debug';

/**
 * 压缩js
 * https://github.com/terinjokes/gulp-uglify
 */
import uglify from 'gulp-uglify';

/**
 * 引入 .fezconfig 配置
 */
import config from './fezconfig';


/**
 * 使用 jshint 对脚本文件基本测试
 * 只用在研发环境，提升代码质量
 */
function jshintAppJs() {
  return gulp.src(config.useJsHint.files)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(cache('linting')) //检测当前改动的文件
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
}

export default {
  dev(cb, reloadHandler) {
    //配置 handlebars 扩展名
    hbsfy.configure({
      extensions: ['hbs']
    });

    let babelrc = require('rc')('babel', {});
    delete babelrc._;
    delete babelrc.config;
    delete babelrc.configs;

    /**
     * browserify 处理多文件
     * https://github.com/isaacs/node-glob
     */
    glob(config.paths.src.appJs, (err, files) => {
      const filesLength = files.length;

      let filesIndex = 0;

      files.map((file) => {
        const source_name = path.dirname(file).split(path.sep).pop();

        const b = watchify(browserify(Object.assign({}, config.browserify.options, watchify.args, {
            entries: file,
            debug: true,
          }))
          .transform(envify({
            _: 'purge',
            NODE_ENV: 'development'
          }))
          .transform(browserifyShim)
          /**
           * 用于区分 mock环境
           */
          .transform(preprocessify, {
            context: {
              MOCK: config.useMock.dev //dev是否打包mock数据
            }
          })
          // .add(require.resolve('babel-polyfill'))
          // 转换 es6
          .transform(babelify.configure(babelrc))
          // 编译 module 中的less
          .transform(lessify)
          // 编译 module 中的 css
          .transform(cssify, { autoInject: true })
          // 编译 module 中的 handlebars 模板
          .transform(hbsfy)
          // 编译 module 中的 jade 模板
          .transform(pugify.pug({
            compileDebug: true,
            pretty: true
          }))
          // 编译 module 中的 vue 模板
          .transform(vueify, { babel: babelrc }));

        function bandle(bUpdate = false) {

          if (config.useJsHint.available) jshintAppJs(); //运行js代码检测

          b.bundle()
            .on('error', (err) => {
              fancyLog(err.message);
              // bs.notify(err.message, 3000);
              // this.emit('end');
            })
            .pipe(plumber({
              errorHandler: notify.onError("Error: <%= error.message %>")
            }))
            .pipe(source(source_name + '.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({
              loadMaps: true //加载源文件的现有映射
            }))
            // Add transformation tasks to the pipeline here.
            // .on('error', function(err) {
            //     console.log('err:' + err);
            //     fancyLog(err)
            // })
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(config.paths.dev.appjs))
            .on('end', () => {
              filesIndex++;

              if (bUpdate) reloadHandler();

              /**
               * 所有文件打包完成后
               */
              if (filesIndex === filesLength) cb();
            });
        }

        bandle(); //编译打包

        /**
         * 当任何依赖发生改变的时候，运行打包工具
         */
        b.on('update', (ids) => {
          bandle(true);
        });

        b.on('log', fancyLog);
      });
    });
  },
  dist(cb) {
    //handlebars 扩展名配置
    hbsfy.configure({
      extensions: ['hbs']
    });

    let babelrc = require('rc')('babel', {});
    delete babelrc._;
    delete babelrc.config;
    delete babelrc.configs;

    glob(config.paths.src.appJs, (err, files) => {
      const filesLength = files.length;

      let filesIndex = 0;

      files.map((file) => {
        const source_name = path.dirname(file).split(path.sep).pop();

        const b = browserify(Object.assign({}, config.browserify.options, {
            entries: file,
            debug: false,
          }))
          .transform(envify({
            _: 'purge',
            NODE_ENV: 'production'
          }))
          .transform(browserifyShim)
          // 处理条件打包
          .transform(preprocessify, {
            context: {
              MOCK: config.useMock.dist //dist是否打包mock数据
            }
          })
          /**
           * 全局对象方法转码
           * http://babeljs.cn/docs/usage/polyfill/
           */
          // .add(require.resolve('babel-polyfill'))
          // 转换 es6
          .transform(babelify.configure(babelrc))
          // 编译 module 中的less
          .transform(lessify)
          // 编译 module 中的 css
          .transform(cssify, { autoInject: true })
          // 编译 module 中的 handlebars 模板
          .transform(hbsfy)
          // 编译 module 中的 jade 模板
          .transform(pugify)
          // 编译 module 中的 vue 模板
          .transform(vueify, { babel: babelrc })
          // 打包
          .bundle()
          .pipe(source(`${source_name}.js`))
          .pipe(buffer())
          .on('error', (err) => {
            fancyLog(err);
          })
          .pipe(stripDebug())
          .pipe(gulpif(
            config.useJsMin,
            uglify()
          ))
          .pipe(gulp.dest(config.paths.tmp.appjs))
          .on('end', () => {
            filesIndex++;

            /**
             * 所有文件打包完成后
             */
            if (filesIndex === filesLength) {
              cb();
            }
          });

      });
    });
  }
}
