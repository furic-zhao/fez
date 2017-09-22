/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * 合并SVG图标
 * https://github.com/Hiswe/gulp-svg-symbols
 */
import svgSymbols from 'gulp-svg-symbols';

/**
 * 在页面中插入内容
 * https://github.com/mikehazell/gulp-inject-string
 */
import injectString from 'gulp-inject-string';

/**
 * gulp 替换内容
 */
import gulpReplace from 'gulp-replace';

/**
 * nodejs中提供本地文件的读写能力
 * http://javascript.ruanyifeng.com/nodejs/fs.html
 */
import fs from 'fs';

/**
 * gulp插件的实用函数
 * https://github.com/gulpjs/gulp-util
 */
import gutil from 'gulp-util';

/**
 * 获取bower.json中的文件
 * https://github.com/ck86/main-bower-files
 */
import mainBowerFiles from 'main-bower-files';

/**
 * 使用glob模式过滤原始文件的子集来处理原始文件
 * https://github.com/sindresorhus/gulp-filter
 */
import filter from 'gulp-filter';

/**
 * 删除或替换文件的相对路径
 * https://github.com/armed/gulp-flatten
 */
import flatten from 'gulp-flatten';

/**
 * 公共文件/业务文件自动化注入
 */
import inject from 'gulp-inject';

/**
 * 拆分gulp数据流
 * https://github.com/OverZealous/lazypipe
 */
import lazypipe from 'lazypipe';

/**
 * gulp 流操作
 * https://github.com/dominictarr/event-stream
 * http://xzper.com/2016/04/09/gulp流式操作/
 */
import es from 'event-stream';

/**
 * 重命名
 * https://github.com/hparra/gulp-rename
 */
import rename from 'gulp-rename';

/**
 * 用于删除文件或目录
 * https://github.com/sindresorhus/del
 */
import del from 'del';

/**
 * gulp条件控制
 * https://github.com/robrich/gulp-if
 */
import gulpif from 'gulp-if';

/**
 * 编译less
 */
import less from 'gulp-less';

/**
 * 编译sass
 */
import sass from 'gulp-sass';

/**
 * css 预处理 css中的 rem/autoprefixer等
 * https://github.com/postcss/gulp-postcss
 */
import postcss from 'gulp-postcss';

/**
 * 自动添加css前缀
 */
import postcssAutoprefixer from 'autoprefixer';

/**
 * CSS 转换 `px` 为 `rem`
 * https://github.com/cuth/postcss-pxtorem
 */
import postcssPxtorem from 'postcss-pxtorem';

/**
 * html预处理 html中的rem转换等
 * https://www.npmjs.com/package/gulp-posthtml
 */
import posthtml from 'gulp-posthtml';

/***************************
    browserify 相关处理模块
 ***************************/
import browserify from 'browserify';
import envify from 'envify/custom';
import browserifyShim from 'browserify-shim';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';

/*加入对es6的支持*/
import babelify from 'babelify';

/**
 * browserify 处理多文件
 * https://github.com/isaacs/node-glob
 */
import glob from "glob";

/**
 * borwserify 支持 require handlebars模板
 * https://github.com/epeli/node-hbsfy
 */
import hbsfy from 'hbsfy';

/**
 * borwserify 支持 require jade 模板
 * https://github.com/domenic/jadeify
 */
import pugify from 'pugify';

/*borwserify 支持 require css样式
https://github.com/davidguttman/cssify
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
 * 在browserify中编辑vue代码
 */
import vueify from 'vueify';


/***************************
 * 以下为发布环境单独使用模块
 ***************************/

/**
 * 具有一致接口、模块化、高性能等特性的 JavaScript 扩展工具库
 * https://lodash.com/
 */
import _ from 'lodash';

/**
 * nodejs中的路径处理模块
 * http://javascript.ruanyifeng.com/nodejs/path.html
 */
import path from 'path';

/**
 * 压缩字体
 * https://github.com/sindresorhus/gulp-size
 */
import size from 'gulp-size';

/**
 * 压缩js
 * https://github.com/terinjokes/gulp-uglify
 */
import uglify from 'gulp-uglify';

/**
 * 压缩html及html中的JS和CSS代码
 * https://github.com/jonschlinkert/gulp-htmlmin
 */
import htmlmin from 'gulp-htmlmin';

/**
 * 合并压缩html中的JS或CSS文件
 * https://github.com/pursual/gulp-usemin
 */
import usemin from 'gulp-usemin';

/**
 * 压缩css
 * https://github.com/ben-eb/gulp-cssnano
 */
import minifyCSS from 'gulp-clean-css';

/**
 * 压缩图片
 * https://github.com/sindresorhus/gulp-imagemin
 */
import imagemin from 'gulp-imagemin';

/**
 * 压缩png
 * https://github.com/imagemin/imagemin-pngquant
 */
import pngquant from 'imagemin-pngquant';

/**
 * 生成md5版本号
 * https://www.npmjs.com/package/gulp-rev
 */
import RevAll from 'gulp-rev';

/**
 * 替换md5版本号文件
 * https://www.npmjs.com/package/gulp-rev-replace
 */
import RevReplace from 'gulp-rev-replace';

/**
 * 删除由gulp-rev或gulp-rev-all重写的原始文件。
 * https://www.npmjs.com/package/gulp-rev-delete-original
 */
import revDel from 'gulp-rev-delete-original';

/**
 * 提取样式中的相对路径
 * https://www.npmjs.com/package/gulp-rev-css-url
 */
import override from 'gulp-rev-css-url';

/**
 * 合并JS
 * https://github.com/contra/gulp-concat
 */
import concatJs from 'gulp-concat';

/**
 * 合并样式
 * https://github.com/mariocasciaro/gulp-concat-css
 */
import concatCss from 'gulp-concat-css';

/**
 * 去掉console代码
 */
import stripDebug from 'gulp-strip-debug';

/**
 * 顺序合并脚本和样式
 */
import concatOrder from "gulp-order";

/**
 * 引入webp模块
 */
import webp from './utils/webp';

/**
 * 引入增量编译模块
 */
import incremental from './utils/incremental';

/**
 * CDN地址替换
 * https://github.com/kaiqigong/gulp-cdnify
 */
import cdnify from 'gulp-cdnify';

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp';

/**
 * 引入 .fezconfig 配置
 */
import config from './utils/fezconfig';

export default () => {

  /**
   * 清除 dist 目录
   **/
  function delDist() {
    return del([config.paths.dist.dir]);
  }

  /**
   * 合并SVG图标
   */
  function svgSymbol(cb) {
    if (!config.svgSymbol.available) return cb();

    return gulp.src(config.paths.src.svg)
      .pipe(svgSymbols(Object.assign({}, config.svgSymbol.options)))
      .pipe(filter("**/*.svg"))
      .pipe(gulpReplace(`<svg xmlns="http://www.w3.org/2000/svg"`, `<svg xmlns="http://www.w3.org/2000/svg" style="display:none"`))
      .pipe(gulp.dest(config.paths.tmp.svg));
  }

  /**
   * 编译css/less/sass
   **/
  function compileCss() {
    const lessCondition = config.cssCompiler === 'less';
    const sassCondition = config.cssCompiler === ('sass' || 'scss');

    function sourcePath() {
      switch (config.cssCompiler) {
        case 'sass':
          return [`${config.paths.src.styles}/*.sass`, `${config.paths.src.styles}/*.scss`];
          break;
        case 'scss':
          return [`${config.paths.src.styles}/*.sass`, `${config.paths.src.styles}/*.scss`];
          break;
        case 'less':
          return [`${config.paths.src.styles}/*.less`];
          break;
        default:
          return [`${config.paths.src.styles}/*.css`];
      }
    }

    return gulp.src(sourcePath())
      .pipe(gulpif(
        sassCondition,
        sass(Object.assign({
          /**
           * ------- outputStyle 取值 ------
           * nested：嵌套缩进的css代码，它是默认值。
           * expanded：没有缩进的、扩展的css代码。
           * compact：简洁格式的css代码。
           * compressed：压缩后的css代码
           */
          outputStyle: 'compact'
        }, config.cssCompilerOptions))
      ))
      .pipe(gulpif(
        lessCondition,
        less(Object.assign({
          relativeUrls: true //将网址编译成相对网址
        }, config.cssCompilerOptions))
      ))
      //css中的rem转换
      .pipe(gulpif(
        config.useREM.css.available,
        postcss([
          postcssPxtorem(Object.assign({
            rootValue: 16, //相对于html根字体大小
            unitPrecision: 5, //允许REM单位增长到的十进制数
            propList: ['*'], //可以从px更改为rem的属性
            selectorBlackList: [], //要忽略的选择器
            replace: true, //替换包含rems的规则，而不是添加fallback
            mediaQuery: false, //允许在媒体查询中转换px
            minPixelValue: 0 //设置要替换的最小像素值
          }, config.useREM.css.options))
        ])
      ))
      .pipe(gulp.dest(config.paths.tmp.css));
  }

  /**
   * 图片压缩
   **/
  function imageminImg() {
    return gulp.src(config.paths.src.img)
      .pipe(imagemin({
        use: [pngquant()]
      }))
      .pipe(RevAll())
      .pipe(override())
      .pipe(gulp.dest(config.paths.tmp.img))
      .pipe(RevAll.manifest({
        merge: true
      }))
      .pipe(gulp.dest(config.paths.tmp.img));
  }

  /**
   * 处理自定义字体文件
   **/
  function fontsSize() {
    return gulp.src(config.paths.src.fonts)
      .pipe(size())
      .pipe(RevAll())
      .pipe(override())
      .pipe(gulp.dest(config.paths.tmp.fonts))
      .pipe(RevAll.manifest({
        merge: true
      }))
      .pipe(gulp.dest(config.paths.tmp.fonts));
  }

  /**
   * 处理自定义字体文件
   **/
  function copyCustom() {
    return gulp.src(config.paths.src.custom)
      .pipe(gulp.dest(config.paths.tmp.custom));
  }

  /**
   * 自动添加css前缀
   **/
  function compileAutoprefixer() {
    /**
     * "mobile": ["Android >= 4", "iOS >= 6"],
     * "pc": ["last 3 versions", "Explorer >= 8", "Chrome >= 21", "Firefox >= 1", "Edge 13"],
     * "all":["Android >= 4", "iOS >= 6", "last 3 versions", "Explorer >= 8", "Chrome >= 21", "Firefox >= 1", "Edge 13"]
     */
    const postcssOption = [postcssAutoprefixer({
      browsers: ["Android >= 4", "iOS >= 6", "last 3 versions", "Explorer >= 8", "Chrome >= 21", "Firefox >= 1", "Edge 13"]
    })];

    return gulp.src(`${config.paths.tmp.css}/*.css`)
      .pipe(postcss(postcssOption))
      .pipe(gulpif(
        config.useCssMin.available,
        minifyCSS(config.useCssMin.options)
      ))
      .pipe(gulp.dest(config.paths.tmp.css));
  }

  /**
   * 编译业务层js
   **/
  function compileAppJs(cb) {
    //handlebars 扩展名配置
    hbsfy.configure({
      extensions: ['hbs']
    });

    glob(config.paths.src.appJs, (err, files) => {
      const filesLength = files.length;

      let filesIndex = 0;

      files.map((file) => {
        const source_name = file.match(/src[\/|\\]views[\/|\\](.*?)[\/|\\]/)[1];

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
          .transform(babelify.configure({
            "compact": false,
            "presets": [
              "es2015", //转换es6
              "stage-2", //ES7第三阶段语法提案的转码规
              "react" //转换react的jsx
            ],
            "plugins": [
              "transform-runtime",
              "transform-object-assign", //Object.assign转换
              ["transform-es2015-classes", { //转换es6 class插件
                "loose": false
              }],
              ["transform-es2015-modules-commonjs", { //转换es6 module插件
                "loose": false
              }]
            ]
          }))
          // 编译 module 中的less
          .transform(lessify)
          // 编译 module 中的 css
          .transform(cssify, { autoInject: true })
          // 编译 module 中的 handlebars 模板
          .transform(hbsfy)
          // 编译 module 中的 jade 模板
          .transform(pugify)
          // 编译 module 中的 vue 模板
          .transform(vueify)
          // 打包
          .bundle()
          .pipe(source(`${source_name}.js`))
          .pipe(buffer())
          .on('error', (err) => {
            gutil.log(err);
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

  /**
   * 复制bower文件到缓存目录等待处理
   **/
  function copyBowerFiles(cb) {
    if (!config.useInject.bower.available) return cb();

    const jsFilter = filter('**/*.js', {
      restore: true
    });
    const cssFilter = filter('**/*.css', {
      restore: true
    });
    const fontFilter = filter('**/*.{eot,svg,ttf,woff,woff2}');

    return gulp.src(mainBowerFiles())
      .pipe(jsFilter)
      .pipe(gulp.dest(`./tmp/bower/js`))
      .pipe(jsFilter.restore)
      .pipe(cssFilter)
      //Bower 中的 css rem 转换
      .pipe(gulpif(
        config.useREM.css.available,
        postcss([
          postcssPxtorem({
            rootValue: 16, //相对于html根字体大小
            unitPrecision: 5, //允许REM单位增长到的十进制数
            propList: ['*'], //可以从px更改为rem的属性
            selectorBlackList: [], //要忽略的选择器
            replace: true, //替换包含rems的规则，而不是添加fallback
            mediaQuery: false, //允许在媒体查询中转换px
            minPixelValue: 0 //设置要替换的最小像素值
          })
        ])
      ))
      .pipe(gulp.dest(`./tmp/bower/css`))
      .pipe(cssFilter.restore)
      .pipe(fontFilter)
      .pipe(flatten())
      .pipe(size())
      .pipe(RevAll())
      .pipe(override())
      .pipe(gulp.dest(config.paths.tmp.fonts))
      .pipe(RevAll.manifest({
        merge: true
      }))
      .pipe(gulp.dest(config.paths.tmp.fonts));
  }

  function bowerCustomJs(cb) {
    if (!config.useInject.bower.available || config.useInject.bower.js.length === 0) return cb();

    let fileIndex = 0;

    for (let elem of config.useInject.bower.js) {
      gulp.src('./tmp/bower/**/*.js')
        .pipe(filter(elem.contain))
        .pipe(concatOrder(elem.contain))
        .pipe(concatJs(elem.target))
        .pipe(gulpif(
          config.useJsMin,
          uglify()
        ))
        .pipe(gulp.dest(config.paths.tmp.appjs))
        .on("end", () => {
          fileIndex++;

          let delFiles = [];

          for (let item of elem.contain) {
            delFiles.push(`./tmp/bower/${item}`);
          }

          del.sync(delFiles);

          if (fileIndex >= config.useInject.bower.js.length) {
            cb();
          }
        })
    }
  }

  function bowerVendorJs(cb) {
    if (!config.useInject.bower.available) return cb();

    return gulp.src('./tmp/bower/**/*.js')
      .pipe(filter('**/*.js'))
      .pipe(concatJs('vendor.js'))
      .pipe(gulpif(
        config.useJsMin,
        uglify()
      ))
      .pipe(gulp.dest(config.paths.tmp.appjs));
  }

  function bowerCustomCss(cb) {
    if (!config.useInject.bower.available || config.useInject.bower.css.length === 0) return cb();

    let fileIndex = 0;

    for (let elem of config.useInject.bower.css) {
      gulp.src(`./tmp/bower/**/*.css`)
        .pipe(filter(elem.contain))
        .pipe(concatOrder(elem.contain))
        .pipe(concatCss(elem.target, { rebaseUrls: false }))
        .pipe(gulpif(
          config.useCssMin.available,
          minifyCSS(config.useCssMin.options)
        ))
        .pipe(flatten())
        .pipe(gulp.dest(config.paths.tmp.css))
        .on("end", () => {
          fileIndex++;
          let delFiles = [];

          for (let item of elem.contain) {
            delFiles.push(`./tmp/bower/${item}`);
          }

          del.sync(delFiles);

          if (fileIndex >= config.useInject.bower.css.length) {
            cb();
          }
        })
    }
  }

  function bowerVendorCss(cb) {
    if (!config.useInject.bower.available) return cb();

    return gulp.src('./tmp/bower/**/*.css')
      .pipe(filter('**/*.css'))
      .pipe(concatCss('vendor.css', { rebaseUrls: false }))
      .pipe(gulpif(
        config.useCssMin.available,
        minifyCSS(config.useCssMin.options)
      ))
      .pipe(flatten())
      .pipe(gulp.dest(config.paths.tmp.css))
      .on("end", () => {
        del.sync(['./tmp/bower']);
      });
  }

  /**
   * 复制公共脚本到缓存目录等待处理
   **/
  function copyLibFiles() {
    return gulp.src(config.paths.src.lib)
      .pipe(gulp.dest(`./tmp/lib/js`));
  }

  /**
   * 根据 .fezrc 配置项合并公共脚本
   **/
  function libCustomJs(cb) {
    if (!config.useInject.lib.available || config.useInject.lib.js.length === 0) return cb();

    let fileIndex = 0;

    for (let elem of config.useInject.lib.js) {
      gulp.src('./tmp/lib/**/*.js')
        .pipe(filter(elem.contain))
        .pipe(concatOrder(elem.contain))
        .pipe(concatJs(elem.target))
        .pipe(gulpif(
          config.useJsMin,
          uglify()
        ))
        .pipe(gulp.dest(config.paths.tmp.appjs))
        .on("end", () => {
          fileIndex++;

          let delFiles = [];

          for (let item of elem.contain) {
            delFiles.push(`./tmp/lib/${item}`);
          }

          del.sync(delFiles);

          if (fileIndex >= config.useInject.lib.js.length) {
            cb();
          }
        })
    }
  }

  /**
   * 处理插入到指定页面的脚本
   **/
  function libAssignJs() {
    return gulp.src('./tmp/lib/**/*assign*.js')
      .pipe(flatten())
      .pipe(gulpif(
        config.useJsMin,
        uglify()
      ))
      .pipe(gulp.dest(config.paths.tmp.appjs))
      .on("end", () => {
        del.sync(`./tmp/lib/**/*assign*.js`);
      });
  }

  /**
   * 合并 .fezrc 中未配置的剩下的所有公共脚本
   **/
  function libVendorJs() {
    return gulp.src('./tmp/lib/**/*.js')
      .pipe(filter('**/*.js'))
      .pipe(concatJs('common.js'))
      .pipe(gulpif(
        config.useJsMin,
        uglify()
      ))
      .pipe(gulp.dest(config.paths.tmp.appjs))
      .on("end", () => {
        del.sync(['./tmp/lib']);
      });
  }

  /**
   * html 编译
   **/
  function compileHtml(cb) {
    //压缩编译html
    const htmlMinPipe = lazypipe()
      .pipe(() => {
        return usemin({
          html: [() => {
            let options = config.useHtmlMin.options || {
              removeComments: true, //清除HTML注释
              collapseWhitespace: true, //压缩HTML
              collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
              removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
              removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
              removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
              minifyJS: true, //压缩页面JS
              minifyCSS: true //压缩页面CSS
            };
            return htmlmin(options);
          }],
          js: [uglify]
        })
      });

    //合并后的bower文件注入
    const injectBowerFiles = lazypipe()
      .pipe(() => {
        return inject(gulp.src([`./tmp/static/js/*vendor*.js`, `./tmp/static/css/*vendor*.css`], {
          read: false
        }), {
          starttag: '<!-- inject:bower:{{ext}} -->',
          ignorePath: '../../../tmp/',
          relative: true,
        });
      });

    //公共文件注入
    const injectLibFiles = lazypipe()
      .pipe(() => {
        return inject(gulp.src([`./tmp/static/css/**/${config.useInject.lib.css}.css`, `./tmp/static/js/**/*common*.js`, `!./tmp/static/js/**/assign-*.js`], {
          read: false
        }), {
          starttag: '<!-- inject:lib:{{ext}} -->',
          ignorePath: '../../../tmp/',
          relative: true,
        })
      });

    /**
     * 将symbol后的svg内容自动注入到html中
     */
    const injectSvg = lazypipe()
      .pipe(() => {
        if (config.svgSymbol.available && config.svgSymbol.autoInject) {
          return injectString.after('<body>', fs.readFileSync(`${config.paths.tmp.svg}/svg-symbols.svg`).toString('utf-8'))
        } else {
          return buffer();
        }
      });

    //处理页面
    const injectHtml = (es) => {
      return es.map((file, cb) => {
        let cateName = file.path.match(/((.*?)[\/|\\])*([^.]+).*/)[2];

        gulp.src(file.path)
          .pipe(rename(cateName + '.html'))
          .pipe(gulpif(
            config.useInject.bower.available,
            injectBowerFiles()
          ))
          .pipe(gulpif(
            config.useInject.lib.available,
            injectLibFiles()
          ))
          .pipe(gulpif(
            config.useInject.views,
            inject(gulp.src([`./tmp/static/js/**/assign*-${cateName}*.js`, `./tmp/static/css/**/${cateName}.css`, `./tmp/static/js/**/${cateName}.js`], {
              read: false
            }), {
              starttag: '<!-- inject:views:{{ext}} -->',
              ignorePath: '../../../tmp/',
              relative: true,
            })
          ))
          .pipe(gulpif(
            (config.svgSymbol.available && config.svgSymbol.autoInject),
            injectSvg()
          ))
          .pipe(gulpif(
            config.useHtmlMin.available,
            htmlMinPipe()
          ))
          .pipe(gulp.dest(config.paths.tmp.html))
          .on("end", () => {
            cb();
          });
      });
    };

    /**
     * 入口页面
     */
    const indexHtmlFilter = filter('**/index.html', {
      restore: true
    });

    gulp.src(config.paths.src.html)
      .pipe(indexHtmlFilter)
      .pipe(injectHtml(es))
      .pipe(indexHtmlFilter.restore)
      .pipe(gulp.dest(config.paths.tmp.html))
      .on("end", () => {
        cb();
      });
  }

  //CSS 压缩(为提高编译速度分散到其它任务异步处理)
  // function miniCSS() {
  //     return gulp.src(`${config.paths.tmp.css}/**/*.css`)
  //         .pipe(gulpif(
  //             config.useCssMin.available,
  //             minifyCSS(config.useCssMin.options)
  //         ))
  //         .pipe(flatten())
  //         .pipe(gulp.dest(config.paths.tmp.css));
  // }

  //JS 压缩(为提高编译速度分散到其它任务异步处理)
  // function miniJS() {
  //     return gulp.src(`${config.paths.tmp.appjs}/**/*.js`)
  //         .pipe(stripDebug())
  //         .pipe(gulpif(
  //             config.useJsMin,
  //             uglify()
  //         ))
  //         .pipe(flatten())
  //         .pipe(gulp.dest(config.paths.tmp.appjs));
  // }

  /**
   * CDN 地址替换
   **/
  function cdnReplace(cb) {
    if (!config.useCdn.available) return cb();

    return gulp.src([`${config.paths.tmp.dir}/**/*.{${config.useCdn.extFile}}`])
      .pipe(cdnify({
        base: config.useCdn.base,
        rewriter: (url, process) => {
          if (/http|https|^(\/\/)/.test(url)) {
            return process(url);
          } else if (/eot|ttf|woff|woff2/.test(url)) {
            return `${config.useCdn.fonts}${url}`;
          } else if (/(png|jpg|gif)$/.test(url)) {
            return `${config.useCdn.images}${url}`;
          } else if (/(js)$/.test(url)) {
            return `${config.useCdn.js}${url}`;
          } else if (/(css)$/.test(url)) {
            return `${config.useCdn.css}${url}`;
          } else {
            return process(url);
          }
        }
      }))
      .pipe(gulp.dest(config.paths.tmp.dir))
  }

  /**
   * webp 编译
   **/
  function compileWebp(cb) {
    if (!config.useWebp.available) {
      return function notAvailableWebp(cb) {
        cb();
      }
    }

    const webpTask = webp();

    return webpTask();
  }

  /**
   * 生成md5后缀的文件名
   **/
  function reversion(cb) {
    if (!config.useMd5.available) return cb();

    return gulp.src([`${config.paths.tmp.dir}/**/*`, `!${config.paths.tmp.dir}/**/*.html`, `!${config.paths.tmp.dir}/**/images/**/*`, `!${config.paths.tmp.dir}/**/fonts/**/*`])
      .pipe(RevAll())
      .pipe(override())
      .pipe(revDel())
      .pipe(gulp.dest(config.paths.tmp.dir))
      .pipe(RevAll.manifest({
        merge: true
      }))
      .pipe(gulp.dest(config.paths.tmp.dir));
  }

  /**
   * 替换md5后缀的文件名
   */
  function reversionRepalce(cb) {
    if (!config.useMd5.available) return cb();

    let manifest = gulp.src(`${config.paths.tmp.dir}/**/rev-manifest*.json`);
    return gulp.src([`${config.paths.tmp.dir}/**/*`])
      .pipe(RevReplace({
        manifest: manifest
      }))
      .pipe(gulp.dest(config.paths.tmp.dir));
  }

  /**
   * 完成编译
   * 如果开启增量编译（只保留改动过的文件）
   */
  function compileChanged(cb) {
    //清除 tmp 目录
    const delTmp = () => del([config.paths.tmp.dir]);

    if (!config.compileChanged) {
      return gulp.src(`${config.paths.tmp.dir}/**/*`, {
          base: config.paths.tmp.dir
        })
        .pipe(gulp.dest(config.paths.dist.dir))
        .on('end', () => {
          delTmp();
        });
    } else {
      return incremental(cb, delTmp);
    }
  }

  /**
   * 生产任务任务
   * series 中的任务同步执行
   * parallel 中的任务异步执行
   */
  gulp.task('dist', gulp.series(
    delDist,
    compileCss, //编译css
    gulp.parallel(
      compileAutoprefixer, //自动添加前缀
      imageminImg, //图片压缩
      fontsSize, //字体压缩
      copyCustom, //处理自定义文件
      svgSymbol //合并svg图标
    ),
    gulp.parallel(
      compileAppJs, //编译压缩业务层js
      gulp.series(
        copyBowerFiles, //复制bower文件到缓存目录
        gulp.parallel(
          gulp.series(
            bowerCustomJs, //合并自定义bower脚本文件
            bowerVendorJs, //合并除却自定义以外的bower脚本文件
          ),
          bowerCustomCss, //合并自定义bower样式文件
        ),
        bowerVendorCss //合并除却自定义以外的bower样式文件
      ),
      gulp.series(
        copyLibFiles, //复制lib公共脚本文件到缓存目录
        libCustomJs, //合并自定义lib公共脚本文件
        libAssignJs, //处理注入到特定页面的lib脚本文件
        libVendorJs //合并除却自定义及特定页面以外的lib脚本文件
      )
    ),
    compileHtml, //编译压缩html
    reversion, //给静态资源添加版本号
    reversionRepalce, //替换版本号的静态资源
    compileWebp(), //编译webp
    cdnReplace,
    compileChanged //只编译改动过的文件
  ));
}
