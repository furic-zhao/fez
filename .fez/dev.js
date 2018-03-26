/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

/**
 * ---------------------------------
 * 研发任务
 * ---------------------------------
 */

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path'

/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs'

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log'

/**
 * 用于删除文件或目录
 * https://github.com/sindresorhus/del
 */
import del from 'del'

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp'

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

/**
 * 编译出现异常不退出监听(针对gulp的watch监听)
 */
import plumber from 'gulp-plumber'

/**
 * 捕获错误，返回错误信息
 */
import notify from 'gulp-notify'

/**
 * buffer
 * https://github.com/hughsk/vinyl-buffer
 */
import buffer from 'vinyl-buffer'

/**
 * sourcemaps
 * https://github.com/gulp-sourcemaps/gulp-sou
 */
import sourcemaps from 'gulp-sourcemaps'

/**
 * 多终端测试
 * https://browsersync.io/docs/gulp
 */
import bs from 'browser-sync'
bs.create()

/**
 * 引入 fez.config.js 配置
 */
import config from './utils/fezconfig'

/**
 * 引入开发环境生成二维码页面模块
 */
import qrCode from './utils/zindex'

/**
 * 编译JS
 */
import compileJs from './utils/webpack'

export default () => {

  /**
   * 调用browsersync自动刷新浏览器
   */
  function reloadHandler() {
    config.browsersync.dev.available && bs.reload()
  }

  /**
   * 删除开发目录
   */
  function delDev() {
    return del([config.paths.dev.dir])
  }

  /**
   * 通用复制模块
   */
  function copyHandler(type, file = '**/*') {
    return gulp.src(path.join(process.cwd(), config.paths.src[type], file), {
        base: config.paths.src.dir
      })
      .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      }))
      .pipe(gulp.dest(config.paths.dev.dir))
      .on('end', reloadHandler)
  }

  /**
   * 复制图片到研发目录
   */
  function copyImages() {
    return copyHandler('img')
  }

  /**
   * 复制公共脚本到研发目录
   */
  function copyLib() {
    return copyHandler("lib")
  }

  /**
   * 复制字体到研发目录
   */
  function copyFonts() {
    return copyHandler('fonts')
  }

  /**
   * 复制自定义文件到研发目录
   */
  function copyCustom() {
    return copyHandler('custom')
  }

  /**
   * 复制vendor文件到研发目录
   */
  function copyVendor() {
    return copyHandler('vendor')
  }

  const postcssOption = [postcssAutoprefixer(Object.assign({}, config.style.autoprefixerOptions))]

  /**
   * 编译css
   */
  function compileCss() {
    return gulp.src([`${config.paths.src.styles}/*.css`, `${config.paths.src.appJs}/**/index.css`])
      .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      }))
      //css中的rem转换
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
      .pipe(postcss(postcssOption)) //添加CSS前缀
      .pipe(gulp.dest(config.paths.dev.css))
      .on('end', reloadHandler)
  }

  /**
   * 编译less
   */
  function compileLess() {
    return gulp.src([`${config.paths.src.styles}/*.less`, `${config.paths.src.appJs}/**/index.less`])
      .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      }))
      .pipe(sourcemaps.init())
      .pipe(less(Object.assign({
        relativeUrls: true //将网址编译成相对网址
      }, config.style.lessOptions)))
      .on('error', (error) => {
        fancyLog(error.message)
      })
      //css中的rem转换
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
      .pipe(postcss(postcssOption)) //添加CSS前缀
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.paths.dev.css))
      .on('end', reloadHandler)
  }

  /**
   * 编译sass
   */
  function compileSass() {
    return gulp.src([`${config.paths.src.styles}/*.{scss,sass}`, `${config.paths.src.appJs}/**/index.{scss,sass}`])
      .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      }))
      .pipe(sourcemaps.init())
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
      .on('error', (error) => {
        fancyLog(error.message)
      })
      //css中的rem转换
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
      .pipe(postcss(postcssOption)) //添加CSS前缀
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.paths.dev.css))
      .on('end', reloadHandler)
  }

  /**
   * 编译stylus
   */
  function compileStylus() {
    return gulp.src([`${config.paths.src.styles}/*.styl`, `${config.paths.src.appJs}/**/index.styl`])
      .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      }))
      .pipe(sourcemaps.init())
      .pipe(stylus(Object.assign({}, config.style.stylusOptions)))
      .on('error', (error) => {
        fancyLog(error.message)
      })
      //css中的rem转换
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
      .pipe(postcss(postcssOption)) //添加CSS前缀
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.paths.dev.css))
      .on('end', reloadHandler)
  }

  /**
   * 处理JS
   */
  function handleJs(cb) {
    compileJs.dev(cb, reloadHandler)
  }

  /**
   * 合并SVG图标
   */
  function svgSymbol(cb = () => {}) {
    if (!config.svgSymbol.available) return cb()

    return gulp.src(path.join(process.cwd(), config.paths.src.svg, '**/*.svg'))
      .pipe(svgmin())
      .pipe(svgSymbols(Object.assign({}, config.svgSymbol.options)))
      .pipe(filter("**/*.svg"))
      .pipe(svgSymbolsToJs())
      .pipe(rename({
        extname: ".js"
      }))
      .pipe(gulp.dest(config.paths.dev.lib))
      .on('end', reloadHandler)
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
   * 复制bower文件到dev目录
   * 研发环境直接使用 bower 路径 不对文件作任何处理
   */
  function copyBowerFiles(cb) {
    if (!bowerAvailable()) return cb()

    const cssFilter = filter('**/*.css', {
      restore: true
    })

    return gulp.src(mainBowerFiles(), {
        base: './'
      })
      .pipe(cssFilter)
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
      .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      }))
      .pipe(cssFilter.restore)
      .pipe(gulp.dest(config.paths.dev.dir))
  }

  function injectHtmlFiles(htmlPath = path.join(process.cwd(), config.paths.src.html, '**/*.html')) {
    return new Promise((resolve, reject) => {
      /**
       * 自动注入Bower库文件到html页面中
       */
      const injectBower = lazypipe()
        .pipe(() => {
          if (!bowerAvailable()) return buffer()

          return inject(gulp.src(mainBowerFiles(), {
            read: false
          }), {
            starttag: '<!-- inject:vendor:{{ext}} -->',
            name: "vendor",
            relative: true,
            ignorePath: '../../../',
            // addRootSlash: true
          })
        })

      /**
       * 自动注入项目公共库文件到html页面中
       */
      const injectLib = lazypipe()
        .pipe(() => {
          return inject(gulp.src([`./dev/static/css/**/${config.useInject.common.css}.css`, `./dev/lib/**/*.js`, `!./dev/lib/**/assign-*.js`], {
            read: false
          }), {
            starttag: '<!-- inject:common:{{ext}} -->',
            relative: true,
            ignorePath: '../../../dev/',
            // addRootSlash: true
          })
        })

      const injectHtml = (es) => {
        return es.map((file, cb) => {
          const cateName = file.path.match(/((.*?)[\/|\\])*([^.]+).*/)[2]

          gulp.src(file.path)
            .pipe(plumber({
              errorHandler: notify.onError("Error: <%= error.message %>")
            }))
            .pipe(rename(cateName + '.html'))
            .pipe(gulpif(
              bowerAvailable(),
              injectBower()
            ))
            .pipe(gulpif(
              config.useInject.common.available,
              injectLib()
            ))
            .pipe(gulpif(
              config.useInject.page,
              inject(gulp.src([`./dev/lib/**/assign*-${cateName}*.js`, `./dev/static/css/**/${cateName}.css`, `./dev/static/js/**/${cateName}.js`], {
                read: false
              }), {
                starttag: '<!-- inject:page:{{ext}} -->',
                relative: true,
                ignorePath: '../../../dev/',
                // addRootSlash: true
              })
            ))
            .pipe(gulp.dest(config.paths.dev.html))
            .on("end", () => {
              cb()
            })
        })
      }

      /**
       * 入口页面
       */
      const indexHtmlFilter = filter(`**/index.html`, {
        restore: true
      })

      return gulp.src(htmlPath)
        .pipe(plumber({
          errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(indexHtmlFilter)
        .pipe(injectHtml(es))
        .pipe(indexHtmlFilter.restore)
        .pipe(gulp.dest(config.paths.dev.html))
        .on('end', () => {
          reloadHandler()
          resolve()
        })
    })
  }

  /**
   * 编译 html 文件
   */
  function handleHtml(cb) {
    injectHtmlFiles().then(() => {
      cb()
    })
  }

  /**
   * 启动 browsersync
   * 配置参考：http://www.browsersync.cn/docs/options/
   */
  function startServer() {
    bs.init(Object.assign({
      //在Chrome浏览器中打开网站
      // open: "external",
      // browser: "google chrome",
      socket: {
        namespace: '/fez'
      },
      server: config.paths.dev.dir,
      ui: {
        port: 5050
      },
      port: 8080,
      startPath: '/',
      notify: { //提醒条样式
        styles: [
          "margin: 0",
          "padding: 5px 10px",
          "position: fixed",
          "font-size: 14px",
          "z-index: 9999",
          "bottom: 0px",
          "right: 0px",
          "border-radius: 0",
          "border-top-left-radius: 8px",
          "background-color: rgba(0,0,0,0.5)",
          "color: white",
          "text-align: center"
        ]
      }
    }, config.browsersync.dev.options))
  }

  /**
   * 通用处理文件改动
   */
  function watchHandler(type, file) {
    const target = file.match(/^src[\/|\\](.*?)[\/|\\]/)[1]
    const pathParse = path.parse(file)
    if (target === "views") {
      if (pathParse.ext === '.html') {
        const removeFiles = file.match(/^src[\/|\\]views[\/|\\](.*?)[\/|\\]/)[1]
        /*监视页面*/
        if (type === 'removed') {
          del([`${config.paths.dev.dir}/**/${removeFiles}.html`, `${config.paths.dev.dir}/**/${removeFiles}.js`]).then(() => {
            setTimeout(function() {
              qrcodeViewHtml()
            }, 500)
          })
        } else if (type === 'add') {
          injectHtmlFiles(file).then(() => {
            setTimeout(function() {
              qrcodeViewHtml()
            }, 500)
          })
        } else {
          injectHtmlFiles(file)
        }
      } else if (pathParse.ext === '.css') {
        compileCss()
      } else if (pathParse.ext === '.less') {
        compileLess()
      } else if (pathParse.ext === '.scss' || pathParse.ext === '.sass') {
        compileSass()
      } else if (pathParse.ext === '.styl') {
        compileStylus()
      }

    } else if (target === "lib") {
      copyLib()
    } else if (target === "custom") {
      copyCustom()
    } else if (target === "vendor") {
      copyVendor()
    } else if (target === "static") {
      /*监视静态资源*/
      const staticFile = file.match(/^src[\/|\\]static[\/|\\](.*?)[\/|\\]/)[1]

      switch (staticFile) {
        case 'images':
          if (type === 'removed') {
            const tmp = `${config.paths.dev.img}/**/${pathParse.base}`

            del([tmp])
          } else {
            copyHandler('img', path.join('**/', path.basename(file)))
          }
          break
        case 'svg':
          if (type === 'removed') {
            const tmp = `${config.paths.dev.svg}/**/${pathParse.base}`

            del([tmp])
          } else {
            svgSymbol()
          }
          break

        case 'fonts':
          if (type === 'removed') {
            const tmp = `${config.paths.dev.fonts}/**/${pathParse.base}`

            del([tmp])
          } else {
            copyHandler('fonts', path.join('**/', path.basename(file)))
          }
          break
          /**
           * 此处注释掉
           * 公共脚本放入lib目录
           * 业务脚本放在views目录
           */
          // case 'js':
          //     if (type === 'removed') {
          //         const tmp = file.replace('src/', 'dev/')
          //         del([tmp])
          //     } else {
          //         copyHandler('js', file)
          //     }
          //     break

        case 'styles':

          if (type === 'removed') {
            const tmp = `${config.paths.dev.css}/**/${pathParse.name}`

            del([tmp])
          } else {
            switch (pathParse.ext) {
              case '.css':
                compileCss()
                break
              case '.less':
                compileLess()
                break
              case '.scss':
              case '.sass':
                compileSass()
                break
              case '.styl':
                compileStylus()
                break
            }
          }
          break
      }
    }
  }

  /**
   * 使用 gulp 监听文件 改动
   */
  function watch(cb) {
    const watcher = gulp.watch([
      config.paths.src.dir + '/**/*'
    ], {
      ignored: /[\/\\]\./
    })

    watcher
      .on('change', (file) => {
        fancyLog(`${file} 已被修改`)
        watchHandler('changed', file)
      })
      .on('add', (file) => {
        fancyLog(`${file} 新文件已被添加`)
        watchHandler('add', file)
      })
      .on('unlink', (file) => {
        fancyLog(`${file} 已被删除`)
        watchHandler('removed', file)
      })

    cb()
  }

  /**
   * 研发环境生成二维码方便在移动端浏览测试
   */
  function qrcodeViewHtml(cb) {
    return qrCode(cb)
  }

  /**
   * 研发任务
   * series 中的任务同步执行
   * parallel 中的任务异步执行
   */
  gulp.task('dev', gulp.series(
    delDev,
    gulp.parallel(
      compileCss,
      compileLess,
      compileSass,
      compileStylus,
      copyImages,
      svgSymbol,
      copyFonts,
      copyLib,
      copyCustom,
      copyVendor,
      handleJs
    ),
    gulp.parallel(
      copyBowerFiles,
      handleHtml
    ),
    gulp.parallel(
      watch,
      qrcodeViewHtml,
      startServer
    )
  ))
}
