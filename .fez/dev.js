/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

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
 * 自动为css中的图片样式添加 宽/高/background-size 属性
 */
import lazyImageCSS from 'gulp-lazyimagecss';

/**
 * css 预处理 css中的 rem/autoprefixer等
 * https://github.com/postcss/gulp-postcss
 */
import postcss from 'gulp-postcss';

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

/**
 * 编译出现异常不退出监听(针对gulp的watch监听)
 */
import plumber from 'gulp-plumber';

/**
 * 捕获错误，返回错误信息
 */
import notify from 'gulp-notify';


/***************************
    browserify 相关处理模块
 ***************************/
import browserify from 'browserify';
import browserifyShim from 'browserify-shim';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';

/*加入对es6的支持*/
import babelify from 'babelify';

/*browserify 处理多文件
https://github.com/isaacs/node-glob
 */
import glob from 'glob';

/**
 * borwserify 支持 require handlebars模板
 * https://github.com/epeli/node-hbsfy
 */
import hbsfy from 'hbsfy';

/**
 * borwserify 支持 require jade 模板
 * https://github.com/sidorares/pugify
 */
import pugify from 'pugify';

/**
 * borwserify 支持 require css样式
 * https://github.com/davidguttman/cssify
 */
import cssify from 'cssify';

/*borwserify 支持 require less样式
https://github.com/dstokes/lessify
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


/*****************************
 * 以下为研发环境单独使用模块
 *****************************/

/*自动刷新浏览器
https://browsersync.io/docs/gulp
 */
import bs from 'browser-sync';
bs.create();

/* 提高browserify 的处理效率
https://github.com/substack/watchify
 */
import watchify from 'watchify';

/**
 * js代码语法检测
 * https://github.com/spalger/gulp-jshint
 */
import jshint from 'gulp-jshint';

/**
 * 只对发生更改的 js 文件进行语法检测
 * https://github.com/contra/gulp-cached
 */
import cache from 'gulp-cached';

/**
 * 引入开发环境生成二维码页面模块
 */
import qrCode from './utils/zindex.js';


export default (gulp, config) => {

    /**
     * 调用browsersync自动刷新浏览器
     */
    function reloadHandler() {
        config.browsersync.available && bs.reload();
    }

    /**
     * 删除开发目录
     */
    function delDev() {
        return del([config.paths.dev.dir]);
    }

    /**
     * 通用复制模块
     */
    function copyHandler(type, file = config.paths['src'][type]) {

        return gulp.src(file, {
                base: config.paths.src.dir
            })
            .pipe(plumber({
                errorHandler: notify.onError("Error: <%= error.message %>")
            }))
            .pipe(gulp.dest(config.paths.dev.dir))
            .on('end', reloadHandler);
    };

    /**
     * 复制图片到研发目录
     */
    function copyImg() {
        return copyHandler('img');
    }

    /**
     * 复制公共脚本到研发目录
     */
    function copyLib() {
        return copyHandler("lib");
    }

    /**
     * 复制雪碧图到研发目录 不做任何处理
     */
    function copySlice() {
        return copyHandler('slice');
    }

    /**
     * 复制字体到研发字体目录
     */
    function copyFonts() {
        return copyHandler('fonts');
    }

    /**
     * 编译css/less/sass
     * 可以在 .fezrc 配置中任选其一
     */
    function compileCss() {
        let lessCondition = config.cssCompiler === 'less';
        let sassCondition = config.cssCompiler === 'sass';

        let sourcePath = () => {
            if (config.cssCompiler === 'sass') {
                return config.paths.src.sass;
            } else if (config.cssCompiler === 'less') {
                return config.paths.src.less;
            } else {
                return config.paths.src.css;
            }
        }

        return gulp.src(sourcePath())
            .pipe(plumber({
                errorHandler: notify.onError("Error: <%= error.message %>")
            }))
            .pipe(sourcemaps.init())
            .pipe(gulpif(
                sassCondition,
                sass()
            ))
            .pipe(gulpif(
                lessCondition,
                less({
                    relativeUrls: true //将网址编译成相对网址
                })
            ))
            .pipe(sourcemaps.write())
            .on('error', (error) => {
                gutil.log(error.message);
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
            //自动添加图片的宽/高属性
            .pipe(lazyImageCSS({
                imagePath: ['../slice'] //gulp-lazyImageCSS 寻找目录
            }))
            .pipe(gulp.dest(config.paths.dev.css))
            .on('end', reloadHandler)
    }

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
    };

    /**
     * 使用 browserify 编译 模块化 脚本代码
     */
    function compileAppJs(cb) {
        //配置 handlebars 扩展名
        hbsfy.configure({
            extensions: ['hbs']
        });

        /**
         * browserify 处理多文件
         * https://github.com/isaacs/node-glob
         */
        glob(config.paths.src.appJs, (err, files) => {
            let filesLength = files.length;
            let filesIndex = 0;

            files.map((file) => {
                let source_name = file.match(/src[\/|\\]views[\/|\\](.*?)[\/|\\]/)[1];

                let b = watchify(browserify(Object.assign({}, config.browserify.options, watchify.args, {
                        entries: file,
                        debug: true,
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
                    .transform(babelify.configure({
                        compact: false,
                        presets: [
                            "es2015",
                            "stage-2",
                            "transform-object-assign" //用于低版本浏览器Object.assign转换
                        ]
                    }))
                    // 编译 module 中的less
                    .transform(lessify)
                    // 编译 module 中的 css
                    .transform(cssify)
                    // 编译 module 中的 handlebars 模板
                    .transform(hbsfy)
                    // 编译 module 中的 jade 模板
                    .transform(pugify.pug({
                        compileDebug: true,
                        pretty: true
                    }))
                    // 编译 module 中的 vue 模板
                    .transform(vueify));

                function bandle(bUpdate = false) {

                    if (config.useJsHint.available) jshintAppJs(); //运行js代码检测

                    b.bundle()
                        .on('error', function(err) {
                            gutil.log(err.message);
                            bs.notify(err.message, 3000);
                            this.emit('end');
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
                        //     gutil.log(err)
                        // })
                        .pipe(sourcemaps.write('./'))
                        .pipe(gulp.dest(config.paths.dev.appjs))
                        .on('end', function() {
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
                b.on('update', function(ids) {
                    bandle(true);
                });

                b.on('log', gutil.log);
            });
        });
    };

    /**
     * 复制bower文件到dev目录
     * 研发环境直接使用 bower 路径 不对文件作任何处理
     */
    function copyBowerFiles(cb) {
        if (!config.useInject.bower.available) return cb();

        let cssFilter = filter('**/*.css', {
            restore: true
        });

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
            .pipe(gulp.dest(config.paths.dev.dir));
    }

    /**
     * 编译 html 文件
     */
    function compileHtml(cb) {
        let injectBower = lazypipe()
            .pipe(function() {
                if (!config.useInject.bower.available) return buffer();

                return inject(gulp.src(mainBowerFiles(), {
                    read: false
                }), {
                    starttag: '<!-- inject:bower:{{ext}} -->',
                    name: "bower",
                    relative: true,
                    ignorePath: '../../../',
                    // addRootSlash: true
                })
            });

        let injectLib = lazypipe()
            .pipe(function() {
                return inject(gulp.src([`./dev/static/css/**/*common*.css`, `./dev/lib/**/*.js`, `!./dev/lib/**/*assign*.js`], {
                    read: false
                }), {
                    starttag: '<!-- inject:lib:{{ext}} -->',
                    relative: true,
                    ignorePath: '../../../dev/',
                    // addRootSlash: true
                })
            });

        let injectHtml = function(es) {
            return es.map(function(file, cb) {
                let cateName = file.path.match(/((.*?)[\/|\\])*([^.]+).*/)[2];

                gulp.src(file.path)
                    .pipe(plumber({
                        errorHandler: notify.onError("Error: <%= error.message %>")
                    }))
                    .pipe(rename(cateName + '.html'))
                    .pipe(gulpif(
                        config.useInject.bower.available,
                        injectBower()
                    ))
                    .pipe(gulpif(
                        config.useInject.lib.available,
                        injectLib()
                    ))
                    .pipe(gulpif(
                        config.useInject.views,
                        inject(gulp.src([`./dev/lib/*${cateName}*.js`, `./dev/static/css/*${cateName}*.css`, `./dev/static/js/*${cateName}*.js`], {
                            read: false
                        }), {
                            starttag: '<!-- inject:views:{{ext}} -->',
                            relative: true,
                            ignorePath: '../../../dev/',
                            // addRootSlash: true
                        })
                    ))
                    .pipe(gulp.dest(config.paths.dev.html))
                    .on("end", function() {
                        cb();
                    });
            });
        };

        return gulp.src(config.paths.src.html)
            .pipe(plumber({
                errorHandler: notify.onError("Error: <%= error.message %>")
            }))
            .pipe(injectHtml(es))
            .on('end', reloadHandler)
    }

    /**
     * 启动 browsersync
     * 配置参考：http://www.browsersync.cn/docs/options/
     */
    function startServer() {
        bs.init({
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
            port: config['browsersync']['port'] || 8080,
            startPath: config['browsersync']['startPath'] || '/',
            notify: { //自定制livereload 提醒条
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
        });
    }

    /**
     * 通用处理文件改动
     */
    function watchHandler(type, file) {
        let target = file.match(/^src[\/|\\](.*?)[\/|\\]/)[1];

        if (target === "views") {
            /*监视页面*/
            if (type === 'removed') {
                let tmp = file.replace('src/', 'dev/');
                del([tmp]).then(function() {
                    qrcodeViewHtml();
                });
            } else {
                compileHtml();
            }

            if (type === 'add') {
                setTimeout(function() {
                    qrcodeViewHtml();
                }, 500);
            }
        } else if (target === "static") {
            /*监视静态资源*/
            let staticFile = file.match(/^src[\/|\\]static[\/|\\](.*?)[\/|\\]/)[1];

            switch (staticFile) {
                case 'images':
                    if (type === 'removed') {
                        let tmp = file.replace('src/', 'dev/');
                        del([tmp]);
                    } else {
                        copyHandler('img', file);
                    }
                    break;

                case 'fonts':
                    if (type === 'removed') {
                        let tmp = file.replace('src/', 'dev/');
                        del([tmp]);
                    } else {
                        copyHandler('fonts', file);
                    }
                    break;

                case 'slice':
                    if (type === 'removed') {
                        let tmp = file.replace('src/', 'dev/');
                        del([tmp]);
                    } else {
                        copyHandler('slice', file);
                    }
                    break;
                    /**
                     * 此处注释掉
                     * 公共脚本放入lib目录
                     * 业务脚本放在views目录
                     */
                    // case 'js':
                    //     if (type === 'removed') {
                    //         let tmp = file.replace('src/', 'dev/');
                    //         del([tmp]);
                    //     } else {
                    //         copyHandler('js', file);
                    //     }
                    //     break;

                case 'styles':

                    if (type === 'removed') {
                        let tmp = file.replace('src/', 'dev/').replace('.less', '.css').replace('.scss', '.css');
                        del([tmp]);
                    } else {
                        compileCss();
                    }

                    break;
            }
        }


    };

    /**
     * 使用 gulp 监听文件 改动
     */
    function watch(cb) {
        let watcher = gulp.watch([
            config.paths.src.img,
            config.paths.src.slice,
            config.paths.src.lib,
            config.paths.src.lessAll,
            config.paths.src.sassAll,
            config.paths.src.htmlAll,
            // config.paths.src.appJsALL //注释掉(交给watchify处理)
        ], {
            ignored: /[\/\\]\./
        });

        watcher
            .on('change', function(file) {
                gutil.log(`${file} 已被修改`);
                watchHandler('changed', file);
            })
            .on('add', function(file) {
                gutil.log(`${file} 新文件已被添加`);
                watchHandler('add', file);
            })
            .on('unlink', function(file) {
                gutil.log(`${file} 已被删除`);
                watchHandler('removed', file);
            });

        cb();
    }

    /**
     * 研发环境生成二维码方便在移动端浏览测试
     */
    function qrcodeViewHtml(cb) {
        if (config.useQrCodeHtml) {
            qrCode(config, cb);
        } else {
            cb();
        }
    }

    /**
     * 研发 任务
     * series 中的任务同步执行
     * parallel 中的任务异步执行
     */
    gulp.task('dev', gulp.series(
        delDev,
        gulp.parallel(
            copyImg,
            copyFonts,
            copySlice,
            copyLib,
            compileCss,
            compileAppJs
        ),
        gulp.parallel(
            copyBowerFiles,
            compileHtml
        ),
        gulp.parallel(
            watch,
            qrcodeViewHtml,
            startServer
        )
    ));

};
