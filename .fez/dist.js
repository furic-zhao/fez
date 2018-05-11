/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

/**
 * ---------------------------------
 * 生产任务
 * ---------------------------------
 */

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path'

/**
 * 合并SVG图标
 * https://github.com/Hiswe/gulp-svg-symbols
 */
import svgSymbols from 'gulp-svg-symbols'

/**
 * 压缩svg
 */
import svgmin from 'gulp-svgmin'

/**
 * 转换svg-symbols为js文件
 */
import svgSymbolsToJs from 'gulp-fez-svg-symbols-tojs'

/**
 * 在页面中插入内容
 * https://github.com/mikehazell/gulp-inject-string
 */
import injectString from 'gulp-inject-string'

/**
 * gulp 替换内容
 */
import gulpReplace from 'gulp-replace'

/**
 * nodejs中提供本地文件的读写能力
 * http://javascript.ruanyifeng.com/nodejs/fs.html
 */
import fs from 'fs'

/**
 * 获取bower.json中的文件
 * https://github.com/ck86/main-bower-files
 */
import mainBowerFiles from 'main-bower-files'

/**
 * 使用glob模式过滤原始文件的子集来处理原始文件
 * https://github.com/sindresorhus/gulp-filter
 */
import filter from 'gulp-filter'

/**
 * 删除或替换文件的相对路径
 * https://github.com/armed/gulp-flatten
 */
import flatten from 'gulp-flatten'

/**
 * 公共文件/业务文件自动化注入
 */
import inject from 'gulp-inject'

/**
 * 拆分gulp数据流
 * https://github.com/OverZealous/lazypipe
 */
import lazypipe from 'lazypipe'

/**
 * gulp 流操作
 * https://github.com/dominictarr/event-stream
 * http://xzper.com/2016/04/09/gulp流式操作/
 */
import es from 'event-stream'

/**
 * 重命名
 * https://github.com/hparra/gulp-rename
 */
import rename from 'gulp-rename'

/**
 * 用于删除文件或目录
 * https://github.com/sindresorhus/del
 */
import del from 'del'

/**
 * gulp条件控制
 * https://github.com/robrich/gulp-if
 */
import gulpif from 'gulp-if'

/**
 * 编译less
 * https://github.com/stevelacy/gulp-less
 */
import less from 'gulp-less'

/**
 * 编译sass
 * https://github.com/dlmanning/gulp-sass
 */
import sass from 'gulp-sass'

/**
 * 编译stylus
 * https://github.com/stevelacy/gulp-stylus
 */
import stylus from 'gulp-stylus'

/**
 * css 预处理 css中的 rem/autoprefixer等
 * https://github.com/postcss/gulp-postcss
 */
import postcss from 'gulp-postcss'

/**
 * 自动添加css前缀
 * https://github.com/postcss/autoprefixer
 */
import postcssAutoprefixer from 'autoprefixer'

/**
 * CSS 转换 `px` 为 `rem`
 * https://github.com/cuth/postcss-pxtorem
 */
import postcssPxtorem from 'postcss-pxtorem'


import buffer from 'vinyl-buffer'

/**
 * 压缩js
 * https://github.com/terinjokes/gulp-uglify
 */
import uglify from 'gulp-uglify'

/**
 * 压缩html及html中的JS和CSS代码
 * https://github.com/jonschlinkert/gulp-htmlmin
 */
import htmlmin from 'gulp-htmlmin'

/**
 * 合并压缩html中的JS或CSS文件
 * https://github.com/zont/gulp-usemin
 */
import usemin from 'gulp-usemin'

/**
 * 压缩css
 * https://github.com/ben-eb/gulp-cssnano
 */
import minifyCSS from 'gulp-clean-css'

/**
 * 生成md5版本号
 * https://www.npmjs.com/package/gulp-rev
 */
import RevAll from 'gulp-rev'

/**
 * 替换md5版本号文件
 * https://www.npmjs.com/package/gulp-rev-replace
 */
import RevReplace from 'gulp-rev-replace'

/**
 * 删除由gulp-rev或gulp-rev-all重写的原始文件。
 * https://www.npmjs.com/package/gulp-rev-delete-original
 */
import revDel from 'gulp-rev-delete-original'

/**
 * 合并JS
 * https://github.com/contra/gulp-concat
 */
import concatJs from 'gulp-concat'

/**
 * 合并样式
 * https://github.com/mariocasciaro/gulp-concat-css
 */
import concatCss from 'gulp-concat-css'

/**
 * 顺序合并脚本和样式
 */
import concatOrder from "gulp-fez-order"

/**
 * CDN地址替换
 * https://github.com/furic-zhao/gulp-fez-cdn
 */
import cdnify from 'gulp-fez-cdn'

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp'

/**
 * 引入 fez.config.js 配置
 */
import config from './utils/fezconfig'

/**
 * 引入webp模块
 */
import webp from './utils/webp'

/**
 * 引入增量编译模块
 */
import incremental from './utils/incremental'

/**
 * 编译JS
 */
import compileJs from './utils/webpack'

export default () => {

  /**
   * 清除 dist 目录
   **/
  function delDist() {
    return del([config.paths.dist.dir])
  }

  /**
   * 合并SVG图标
   */
  function svgSymbol(cb) {
    if (!config.svgSymbol.available) return cb()

    return gulp.src(path.join(process.cwd(), config.paths.src.svg, '**/*.svg'))
      .pipe(svgmin())
      .pipe(svgSymbols(Object.assign({}, config.svgSymbol.options)))
      .pipe(filter("**/*.svg"))
      .pipe(svgSymbolsToJs())
      .pipe(rename({
        extname: ".js"
      }))
      .pipe(gulp.dest(config.paths.tmp.lib))
  }

  /**
   * 处理图片
   **/
  function handleImages() {
    return gulp.src(path.join(process.cwd(), config.paths.src.img, '**/*'))
      .pipe(gulp.dest(config.paths.tmp.img))
  }

  /**
   * 处理字体
   **/
  function handleFonts(cb) {
    if (!config.useMd5.available) return cb()

    return gulp.src(path.join(process.cwd(), config.paths.src.fonts, '**/*.{otf,eot,svg,ttf,woff,woff2}'))
      .pipe(gulp.dest(config.paths.tmp.fonts))
  }

  /**
   * 处理自定义文件
   **/
  function handleCustom() {
    return gulp.src(path.join(process.cwd(), config.paths.src.custom, '**/*'))
      .pipe(gulp.dest(config.paths.tmp.custom))
  }

  const postcssOption = [postcssAutoprefixer(Object.assign({}, config.style.autoprefixerOptions))]

  /**
   * 编译css
   **/
  function compileCss() {

    return gulp.src([`${config.paths.src.styles}/*.css`, `${config.paths.src.appJs}/**/index.css`])
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
      .pipe(postcss(postcssOption))
      .pipe(gulpif(
        config.useCssMin.available,
        minifyCSS(config.useCssMin.options)
      ))
      .pipe(gulp.dest(config.paths.tmp.css))
  }

  /**
   * 编译less
   **/
  function compileLess() {

    return gulp.src([`${config.paths.src.styles}/*.less`, `${config.paths.src.appJs}/**/index.less`])
      .pipe(less(Object.assign({
        relativeUrls: true //将网址编译成相对网址
      }, config.style.lessOptions)))
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
      .pipe(postcss(postcssOption))
      .pipe(gulpif(
        config.useCssMin.available,
        minifyCSS(config.useCssMin.options)
      ))
      .pipe(gulp.dest(config.paths.tmp.css))
  }

  /**
   * 编译sass
   **/
  function compileSass() {

    return gulp.src([`${config.paths.src.styles}/*.{scss,sass}`, `${config.paths.src.appJs}/**/index.{scss,sass}`])
      .pipe(sass(Object.assign({
        /**
         * ------- outputStyle 取值 ------
         * nested：嵌套缩进的css代码，它是默认值。
         * expanded：没有缩进的、扩展的css代码。
         * compact：简洁格式的css代码。
         * compressed：压缩后的css代码
         */
        outputStyle: 'compact'
      }, config.style.sassOptions)))
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
      .pipe(postcss(postcssOption))
      .pipe(gulpif(
        config.useCssMin.available,
        minifyCSS(config.useCssMin.options)
      ))
      .pipe(gulp.dest(config.paths.tmp.css))
  }

  /**
   * 编译stylus
   **/
  function compileStylus() {

    return gulp.src([`${config.paths.src.styles}/*.styl`, `${config.paths.src.appJs}/**/index.styl`])
      .pipe(stylus(Object.assign({}, config.style.stylusOptions)))
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
      .pipe(postcss(postcssOption))
      .pipe(gulpif(
        config.useCssMin.available,
        minifyCSS(config.useCssMin.options)
      ))
      .pipe(gulp.dest(config.paths.tmp.css))
  }

  /**
   * 编译业务层js
   **/
  function handleJs(cb) {
    compileJs.dist(cb)
  }

  /**
   * 检测bower是否可用
   */
  function bowerAvailable() {

    if (!config.useInject.vendor.available) return false
    if (!fs.existsSync(path.join(process.cwd(), 'bower_components'))) return false
    if (mainBowerFiles().length <= 0) return false

    return true
  }

  /**
   * 复制bower文件到缓存目录等待处理
   **/
  function copyBowerFiles(cb) {
    if (!bowerAvailable()) return cb()

    const jsFilter = filter('**/*.js', {
      restore: true
    })
    const cssFilter = filter('**/*.css', {
      restore: true
    })
    const fontFilter = filter('**/*.{eot,svg,ttf,woff,woff2}')

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
      .pipe(gulp.dest(config.paths.tmp.fonts))
  }

  function bowerCustomJs(cb) {
    if (!bowerAvailable() || config.useInject.vendor.js.length === 0) return cb()

    let fileIndex = 0

    for (let elem of config.useInject.vendor.js) {
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
          fileIndex++

          let delFiles = []

          for (let item of elem.contain) {
            delFiles.push(`./tmp/bower/${item}`)
          }

          del.sync(delFiles)

          if (fileIndex >= config.useInject.vendor.js.length) {
            cb()
          }
        })
    }
  }

  function bowerVendorJs(cb) {
    if (!bowerAvailable()) return cb()

    return gulp.src('./tmp/bower/**/*.js')
      .pipe(filter('**/*.js'))
      .pipe(concatJs('vendor.js'))
      .pipe(gulpif(
        config.useJsMin,
        uglify()
      ))
      .pipe(gulp.dest(config.paths.tmp.appjs))
  }

  function bowerCustomCss(cb) {
    if (!bowerAvailable() || config.useInject.vendor.css.length === 0) return cb()

    let fileIndex = 0

    for (let elem of config.useInject.vendor.css) {
      gulp.src(`./tmp/bower/**/*.css`)
        .pipe(filter(elem.contain))
        .pipe(concatOrder(elem.contain))
        .pipe(concatCss(elem.target, { rebaseUrls: false }))
        .pipe(gulpif(
          config.useCssMin.available,
          minifyCSS()
        ))
        .pipe(flatten())
        .pipe(gulp.dest(config.paths.tmp.css))
        .on("end", () => {
          fileIndex++
          let delFiles = []

          for (let item of elem.contain) {
            delFiles.push(`./tmp/bower/${item}`)
          }

          del.sync(delFiles)

          if (fileIndex >= config.useInject.vendor.css.length) {
            cb()
          }
        })
    }
  }

  function bowerVendorCss(cb) {
    if (!bowerAvailable()) return cb()

    return gulp.src('./tmp/bower/**/*.css')
      .pipe(filter('**/*.css'))
      .pipe(concatCss('vendor.css', { rebaseUrls: false }))
      .pipe(gulpif(
        config.useCssMin.available,
        minifyCSS()
      ))
      .pipe(flatten())
      .pipe(gulp.dest(config.paths.tmp.css))
      .on("end", () => {
        del.sync(['./tmp/bower'])
      })
  }

  /**
   * 复制公共脚本到缓存目录等待处理
   **/
  function copyLibFiles() {
    return gulp.src(path.join(process.cwd(), config.paths.src.lib, '**/*.js'))
      .pipe(gulp.dest(`./tmp/lib/js`))
  }

  /**
   * 根据 fez.config.js 配置项合并公共脚本
   **/
  function libCustomJs(cb) {
    if (!config.useInject.common.available || config.useInject.common.js.length === 0) return cb()

    let fileIndex = 0

    for (let elem of config.useInject.common.js) {
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
          fileIndex++

          let delFiles = []

          for (let item of elem.contain) {
            delFiles.push(`./tmp/lib/${item}`)
          }

          del.sync(delFiles)

          if (fileIndex >= config.useInject.common.js.length) {
            cb()
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
        del.sync(`./tmp/lib/**/*assign*.js`)
      })
  }

  /**
   * 合并 fez.config.js 中未配置的剩下的所有公共脚本
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
        del.sync(['./tmp/lib'])
      })
  }

  /**
   * html 编译
   **/
  function compileHtml(cb) {
    //压缩编译html
    const htmlMinPipe = lazypipe()
      .pipe(() => {
        return usemin({
          css: [minifyCSS()],
          html: [() => {
            const options = {}
            Object.assign(options, config.useHtmlMin.options, {
              removeComments: true, //清除HTML注释
              collapseWhitespace: true, //压缩HTML
              collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
              removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
              removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
              removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
              minifyJS: true, //压缩页面JS
              minifyCSS: true //压缩页面CSS
            })
            return htmlmin(options)
          }],
          js: [uglify()],
          assetsDir: './src/'
        })
      })

    //合并后的bower文件注入
    const injectVendorFiles = lazypipe()
      .pipe(() => {
        return inject(gulp.src([`./tmp/static/js/**/manifest*.js`, `./tmp/static/js/**/vendor*.js`, `./tmp/static/css/**/vendor*.css`, `./tmp/static/js/**/vendor*.css`], {
          read: false
        }), {
          starttag: '<!-- inject:vendor:{{ext}} -->',
          ignorePath: '../../../tmp/',
          relative: true,
        })
      })

    //公共文件注入
    const injectLibFiles = lazypipe()
      .pipe(() => {
        return inject(gulp.src([`./tmp/static/css/**/${config.useInject.common.css}*.css`, `./tmp/static/js/**/common*.js`, `./tmp/static/js/**/common*.css`, `!./tmp/static/js/**/assign-*.js`], {
          read: false
        }), {
          starttag: '<!-- inject:common:{{ext}} -->',
          ignorePath: '../../../tmp/',
          relative: true,
        })
      })

    //处理页面
    const injectHtml = (es) => {
      return es.map((file, cb) => {
        let cateName = file.path.match(/((.*?)[\/|\\])*([^.]+).*/)[2]

        gulp.src(file.path)
          .pipe(rename(cateName + '.html'))
          .pipe(gulpif(
            config.useInject.vendor.available,
            injectVendorFiles()
          ))
          .pipe(gulpif(
            config.useInject.common.available,
            injectLibFiles()
          ))
          .pipe(gulpif(
            config.useInject.page,
            inject(gulp.src([`./tmp/static/js/**/assign*-${cateName}*.js`, `./tmp/static/css/**/${cateName}.css`, `./tmp/static/js/**/${cateName}.js`, `./tmp/static/js/**/${cateName}.css`], {
              read: false
            }), {
              starttag: '<!-- inject:page:{{ext}} -->',
              ignorePath: '../../../tmp/',
              relative: true,
            })
          ))
          .pipe(gulpif(
            config.useHtmlMin.available,
            htmlMinPipe()
          ))
          .pipe(gulp.dest(config.paths.tmp.html))
          .on("end", () => {
            cb()
          })
      })
    }

    /**
     * 入口页面
     */
    const indexHtmlFilter = filter('**/index.html', {
      restore: true
    })

    gulp.src(path.join(process.cwd(), config.paths.src.html, '**/*.html'))
      .pipe(indexHtmlFilter)
      .pipe(injectHtml(es))
      .pipe(indexHtmlFilter.restore)
      .pipe(gulp.dest(config.paths.tmp.html))
      .on("end", () => {
        cb()
      })
  }

  //CSS 压缩(为提高编译速度分散到其它任务异步处理)
  // function miniCSS() {
  //     return gulp.src(`${config.paths.tmp.css}/**/*.css`)
  //         .pipe(gulpif(
  //             config.useCssMin.available,
  //             minifyCSS(config.useCssMin.options)
  //         ))
  //         .pipe(flatten())
  //         .pipe(gulp.dest(config.paths.tmp.css))
  // }

  //JS 压缩(为提高编译速度分散到其它任务异步处理)
  // function miniJS() {
  //     return gulp.src(`${config.paths.tmp.appjs}/**/*.js`)
  //         .pipe(gulpif(
  //             config.useJsMin,
  //             uglify()
  //         ))
  //         .pipe(flatten())
  //         .pipe(gulp.dest(config.paths.tmp.appjs))
  // }

  /**
   * CDN 地址替换
   **/
  function cdnReplace(cb) {
    if (!config.useCdn.available) return cb()

    return gulp.src([`${config.paths.tmp.dir}/**/*.{${config.useCdn.extFile}}`])
      .pipe(cdnify({
        base: config.useCdn.base,
        rewriter: (url, process) => {
          if (/http|https|^(\/\/)/.test(url)) {
            return process(url)
          } else if (/eot|ttf|woff|woff2|svg/.test(url)) {
            url = url.replace(/(\.\.\/fonts)|(\/static\/fonts)/, 'static/fonts')
            return `${config.useCdn.fonts||config.useCdn.base}${url}`
          } else if (/(png|jpg|gif)$/.test(url)) {
            url = url.replace(/(\.\.\/images)|(\/static\/images)/, 'static/images')
            return `${config.useCdn.images||config.useCdn.base}${url}`
          } else if (/(js)$/.test(url)) {
            return `${config.useCdn.js||config.useCdn.base}${url}`
          } else if (/(css)$/.test(url)) {
            return `${config.useCdn.css||config.useCdn.base}${url}`
          } else {
            return process(url)
          }
        }
      }))
      .pipe(gulp.dest(config.paths.tmp.dir))
  }

  /**
   * webp 编译
   **/
  function compileWebp(cb) {
    if (!config.useWebp.available) return function noWebp(cb) {
      cb()
    }
    return webp()
  }

  /**
   * 生成Md5版本号
   **/
  function reversion(cb) {
    if (!config.useMd5.available) return cb()

    return gulp.src([`${config.paths.tmp.dir}/**/*`, `!${config.paths.tmp.dir}/**/*.html`, `!${config.paths.tmp.dir}/**/images/**/*`, `!${config.paths.tmp.dir}/**/fonts/**/*`])
      .pipe(RevAll())
      .pipe(revDel())
      .pipe(gulp.dest(config.paths.tmp.dir))
      .pipe(RevAll.manifest({
        merge: true
      }))
      .pipe(gulp.dest(config.paths.tmp.dir))
  }

  /**
   * 为图片生成Md5版本号
   **/
  function reversionImages() {
    return gulp.src(path.join(process.cwd(), config.paths.tmp.img, '**/*'))
      .pipe(RevAll())
      .pipe(revDel())
      .pipe(gulp.dest(config.paths.tmp.img))
      .pipe(RevAll.manifest({
        merge: true
      }))
      .pipe(gulp.dest(config.paths.tmp.img))
  }

  /**
   * 为字体生成Md5版本号
   **/
  function reversionFonts(cb) {
    if (!config.useMd5.available) return cb()

    return gulp.src(path.join(process.cwd(), config.paths.tmp.fonts, '**/*.{otf,eot,svg,ttf,woff,woff2}'))
      .pipe(RevAll())
      .pipe(revDel())
      .pipe(gulp.dest(config.paths.tmp.fonts))
      .pipe(RevAll.manifest({
        merge: true
      }))
      .pipe(gulp.dest(config.paths.tmp.fonts))
  }

  /**
   * 替换md5后缀的文件名
   */
  function reversionRepalce(cb) {
    if (!config.useMd5.available) return cb()

    let manifest = gulp.src(`${config.paths.tmp.dir}/**/rev-manifest*.json`)
    return gulp.src([`${config.paths.tmp.dir}/**/*`])
      .pipe(RevReplace({
        manifest: manifest
      }))
      .pipe(gulp.dest(config.paths.tmp.dir))
  }

  /**
   * 完成编译
   * 如果开启增量编译（只保留改动过的文件）
   */
  function compileChanged(cb) {
    //清除 tmp 目录
    const delTmp = () => del([config.paths.tmp.dir])

    if (!config.compileChanged) {
      return gulp.src(`${config.paths.tmp.dir}/**/*`, {
          base: config.paths.tmp.dir
        })
        .pipe(gulp.dest(config.paths.dist.dir))
        .on('end', () => {
          delTmp()
        })
    } else {
      return incremental(cb, delTmp)
    }
  }

  /**
   * 生产任务
   * series 中的任务同步执行
   * parallel 中的任务异步执行
   */
  gulp.task('dist', gulp.series(
    delDist,
    gulp.parallel(
      compileCss, //编译css
      compileLess, //编译less
      compileSass, //编译sass
      compileStylus, //编译stylus
      handleImages, //处理图片
      handleFonts, //处理字体
      handleCustom, //处理自定义文件
      svgSymbol //合并svg图标
    ),
    gulp.parallel(
      handleJs, //处理js
      gulp.series(
        copyBowerFiles, //复制bower文件到缓存目录
        gulp.parallel(
          gulp.series(
            bowerCustomJs, //合并自定义bower脚本文件
            bowerVendorJs, //合并未定义bower脚本文件
          ),
          bowerCustomCss, //合并自定义bower样式文件
        ),
        bowerVendorCss //合并未定义bower样式文件
      ),
      gulp.series(
        copyLibFiles, //复制lib公共脚本文件到缓存目录
        libCustomJs, //合并自定义lib公共脚本文件
        libAssignJs, //处理注入到特定页面的lib脚本文件
        libVendorJs //合并未定义lib脚本文件
      )
    ),
    compileHtml, //处理html页面
    gulp.parallel(
      reversion, //给js和css添加版本号
      reversionImages, //给图片添加版本号
      reversionFonts //给字体添加版本号
    ),
    reversionRepalce, //替换版本号的静态资源
    compileWebp(), //编译webp
    cdnReplace, //添加cdn地址
    compileChanged //只编译改动过的文件
  ))
}
