/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

export default {
    /**
     * browsersync配置信息
     * 配置参考【仅对optons】 http://www.browsersync.cn/docs/options/
     */
    browsersync: {
        dev: {
            available: true, //研发环境 开启浏览器自动化刷新
            options: {
                port: 8080, //研发环境 本地服务器的默认端口
                startPath: "zindex.html" //研发环境 打开浏览器默认访问的页面
            }
        },
        test: {
            options: {
                port: 8080, //本地测试生产环境 默认端口
                startPath: "zindex.html" //生产环境 打开浏览器默认访问的页面
            }
        }
    },

    /**
     * 研发环境 使用二维码在移动端扫描测试页面
     * 研发环境输入http://xxxx/zindex.html访问
     */
    useQrCodeHtml: true,

    /**
     * mock配置
     * @if MOCK
     * -------
     * @endif
     */
    useMock: {
        dev: false, //dev打包使用Mock数据
        dist: false //dist打包使用Mock数据
    },

    /**
     * 研发环境 Javascript 语法自动化测试
     * .jshintrc可做详细配置
     */
    useJsHint: {
        available: false, //启用 jshint 自动化测试
        files: "./src/views/**/*.js" //检测文件
    },

    /**
     * 选择css编译器【取值:less/sass/css】
     */
    cssCompiler: "less",

    /**
     * CSS 编译器配置项
     * 请根据 cssCompiler 配置的编译器设置此项
     * 配置参考：
     * https://www.npmjs.com/package/gulp-sass
     * https://www.npmjs.com/package/gulp-less
     */
    cssCompilerOptions: {},

    /**
     * 启用 PX => REM 自动化转换
     * 如果启用 REM 转换需要在公共样式中对<html>设置基准值
     * 通过 media媒体查询 为 <html> 设置不同值 以实现在不同的屏幕中等比缩放
     */
    useREM: {
        css: {
            available: false, //启用 css 中的 px => rem 转换 【包含less,sass】
            /**
             * 配置参考：https://github.com/cuth/postcss-pxtorem
             */
            options: {
                rootValue: 16, //相对于html根字体大小
                unitPrecision: 5, //允许REM单位增长到的十进制数
                propList: ["*"], //可以从px更改为rem的属性
                selectorBlackList: [], //要忽略的选择器
                replace: true, //替换包含rems的规则，而不是添加fallback
                mediaQuery: false, //允许在媒体查询中转换px
                minPixelValue: 0 //设置要替换的最小像素值
            }
        }
    },

    /**
     * 生产环境 启用 图片 => webp 自动化转换
     * 配置参考：https://github.com/imagemin/imagemin-webp
     */
    useWebp: {
        available: false,
        options: {
            quality: 75, //将质量因子设置为0到100。
            alphaQuality: 100, //将透明度 - 压缩质量设置为0到100。
            method: 4, //指定要使用的压缩方法，介于0（最快）和6（最慢）之间。此参数控制编码速度与压缩文件大小和质量之间的折衷。
            sns: 80, //设置空间噪声整形的幅度在0和100之间
            lossless: false //无损编码图像
        }
    },

    /**
     * 生产环境 启用自动化添加文件版本号(md5)
     * 配置参考：https://github.com/smysnk/gulp-rev-all
     */
    useMd5: {
        available: true,
        options: {}
    },

    /**
     * 生产环境 启用增量编译
     */
    compileChanged: false,

    /**
     * 生产环境 启用js压缩
     */
    useJsMin: true,

    /**
     * 生产环境 css压缩配置
     */
    useCssMin: {
        available: true,
        options: {
            safe: true,
            reduceTransforms: false,
            advanced: false, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: "ie7", //保留ie7及以下兼容写法(hack写法) 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepSpecialComments: 0 //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }
    },

    /**
     * 生产环境 html压缩配置
     */
    useHtmlMin: {
        available: true,
        //配置参考 https://github.com/kangax/html-minifier
        options: {
            removeComments: true, //清除HTML注释
            collapseWhitespace: true, //压缩HTML
            collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
            removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
            minifyJS: true, //压缩页面JS
            minifyCSS: true //压缩页面CSS
        }
    },

    /**
     * 生产环境 上传sftp服务器配置信息
     */
    sftp: {
        host: "xxx.xxx.xxx.xxx",
        port: "22",
        user: "root",
        password: "",
        remotePath: "/var/www/html",
        includeHtml: true //是否包含 html 文件
    },

    /**
     * 生产环境 启用CDN静态资源url替换
     */
    useCdn: {
        available: false,
        base: "http://fezcdn.com/", //默认CDN地址
        js: "http://js.fezcdn.com/", //脚本CDN地址
        css: "http://css.fezcdn.com/", //样式CDN地址
        images: "http://img.fezcdn.com/", //图片CDN地址
        fonts: "http://fonts.fezcdn.com/" //字体CDN地址
    },

    /**html自动化注入文件*
     * 【支持自定义打包多个文件到一个文件】
     * 【支持自定义打包单个文件】
     * 【未配置的文件自动打包成一个文件】
     * 【插入页面顺序以字母或数字降序排列-解决插入页面的脚本文件依赖关系】
     * 【打包顺序以文件配置先后降序排列-解决打包文件间的依赖关系】
     */
    useInject: {
        /**
         * ---------- bower打包格式 仅对 生产环境------------
         * 打包文件支持 gulp格式的正则文件名
         * {
         *     "target": "{排序序号}-vendor-{打包名称}.js",
         *     "contain": ["{文件1}", "{文件2}", "{文件3}"]
         * }
         */
        bower: {
            available: false, //启用 bower 文件自动化注入
            js: [],
            css: []
        },

        lib: {
            available: false, //启用 公共 文件自动化注入
            css: "*common*", //以common命名的样式文件会注入到所有的页面
            /*
             * ---------- 公共脚本打包格式 仅对 生产环境------------
             * 打包文件支持 gulp格式的正则文件名
             * {
             *     "target": "{排序序号}-common-{打包名称}.js",
             *     "contain": ["{文件1}", "{文件2}", "{文件3}"]
             * }
             *
             * 【支持单个文件指定注入到某些页面】
             * （命名规则：assign-{页面名}-{页面名}-{other}
             */
            js: []
        },

        /**
         * 【支持src目录中的样式及编译后的逻辑脚本自动化注入到对应的页面】
         * style 目录中的样式命名规则必须为：
         * {页面名}.{css,less,scss} 或者 {other}-{页面名}.{css,less,scss}
         */
        views: false //启用 业务目录 文件自动化注入
    },

    /**
     * bowserify配置
     */
    browserify: {
        options: {
            extensions: [], // import require 引入文件时可以省略的扩展名
            paths: ["./src/views"] // import require 引入文件的根路径
        },
        /**
         * 抽取来通过 import $ from 'jquery';或let $ = require('jquery');
         * 引入的公共文件不和业务逻辑文件打包到一起
         * 此处配置后需要通过script标签形式在页面引入
         * 具体信息请参考：https://github.com/thlorenz/browserify-shim
         * 配置格式：
         * {"import": "Vue","from": "vue"}
         */
        shim: []
    },

    /**
     * svg转icon配置
     * 执行`gulp svg2icon`自动生成icon字体及对应的样式文件
     */
    svgIcons: {
        src: "./src/static/svgicons/", //存放svg图标的路径
        dist: "./src/static/fonts/", //输出字体路径
        /**
         * 配置参考
         * https://github.com/backflip/gulp-iconfont-css
         */
        fontName: "customFont", //生成的字体名称
        targetPath: "../styles/custom-icons.less", //生成的样式文件(扩展名可以是.less,.scss,.css)
        fontPath: "../fonts/" //生成的样式引用字体的路径
    },

    /**
     * Svg图标symblo形式使用配置
     */
    svgSymbol: {
        available: false, //启用svg图标自动化symbol合并
        autoInject: false, //启用将合并后的symbol.svg自动化注入到页面
        /**
         * 配置参考
         * https://github.com/Hiswe/gulp-svg-symbols#options
         */
        options: {
            id: 'fez-%f',
            className: '.fez-%f'
        }
    },

    /**
     * 雪碧图配置
     */
    sprites: {
        src: './src/static/slice/**/*.png',
        dest: {
            css: './src/static/styles/sprite/',
            image: './src/static/images/sprite/'
        },
        options: {
            imgName: 'sprite.png',
            imgPath: '../../images/sprite/sprite.png',
            cssName: 'sprite.less',
            padding: 4,
            cssFormat: "less",
            cssOpts: {
                cssClass: function(item) {
                    // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
                    if (item.name.indexOf('-hover') !== -1) {
                        return '.icon-' + item.name.replace('-hover', ':hover');
                        // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
                    } else {
                        return '.icon-' + item.name;
                    }
                }
            },
            retinaSrcFilter: ['./src/static/slice/**/*@2x.png'],
            retinaImgName: 'sprite@2x.png'
        }
    },

    /**
     * 路径配置
     */
    paths: {
        dir: "./",
        /**
         * 源码目录配置
         */
        src: {
            dir: "./src", //源码根目录

            img: "./src/static/images/**/*.{png,jpg,gif,ico}", //图片目录

            svg: "./src/static/svg/**/*.svg", //SVG源文件目录

            fonts: "./src/static/fonts/**/*.{otf,eot,svg,ttf,woff,woff2}", //字体存放目录

            lib: "./src/lib/**/*.js", //项目公共库文件

            appJs: "./src/views/*/index.js", //每个页面目录下的index.js 入口文件
            appJsALL: "./src/views/**/*.js", //所有业务层js文件，用于监视改动自动刷新

            css: "./src/static/styles/*.css", //页面中引用的样式，工程只编译样式根目录下的文件
            cssAll: "./src/static/styles/**/*.css", //所有业务层css文件，用于监视改动自动刷新

            less: "./src/static/styles/*.less", //页面中引用的样式，工程只编译样式根目录下的文件
            lessAll: "./src/static/styles/**/*.less", //所有业务层less文件，用于监视改动自动刷新

            sass: "./src/static/styles/*.scss", //页面中引用的样式，工程只编译样式根目录下的文件
            sassAll: "./src/static/styles/**/*.scss", //所有业务层sass文件，用于监视改动自动刷新

            html: ["./src/views/**/*.html"], //所有html文件
            htmlAll: "./src/views/**/*.html" //用于监视改动html自动刷新
        },

        /**
         * 开发目录配置
         */
        dev: {
            dir: "./dev", //开发环境根目录

            lib: "./dev/lib", //公共库文件生成目录

            appjs: "./dev/static/js", //编译后的业务逻辑存放目录

            css: "./dev/static/css", //编译后的css代码存放目录

            fonts: "./dev/static/fonts", //编译后的字体文件存放目录

            img: "./dev/static/images", //压缩后的图片存放目录

            svg: "./dev/static/svg", //压缩后的图片存放目录

            html: "./dev" //html编译后的存放目录
        },

        /**
         * 缓存目录配置
         */
        tmp: {
            dir: "./tmp", //缓存根目录

            lib: "./tmp/lib", //公共库文件生成目录

            appjs: "./tmp/static/js", //编译后的业务逻辑存放目录

            css: "./tmp/static/css", //编译后的css代码存放目录

            fonts: "./tmp/static/fonts", //编译后的字体文件存放目录

            img: "./tmp/static/images", //压缩后的图片存放目录

            svg: "./tmp/static/svg", //处理后的SVG存放目录

            html: "./tmp" //html编译后的存放目录
        },

        /**
         * 生产目录配置
         */
        dist: {
            dir: "./dist", //生产环境根目录

            lib: "./dist/lib", //公共库文件生成目录 (已废弃)

            appjs: "./dist/static/js", //编译后脚本代码存放目录

            css: "./dist/static/css", //编译后的css代码存放目录

            fonts: "./dist/static/fonts", //编译后的字体文件存放目录

            img: "./dist/static/images", //压缩后的图片存放目录

            svg: "./dist/static/svg", //处理后的SVG存放目录

            html: "./dist" //html编译后的存放目录
        },

        /**
         * 测试目录配置
         */
        test: {
            dir: "./test", //测试环境 根目录

            appjs: "./test/static/js", //编译后脚本代码存放目录

            css: "./test/static/css", //编译后的css代码存放目录

            fonts: "./test/static/fonts", //编译后的字体文件存放目录

            img: "./test/static/images", //压缩后的图片存放目录

            svg: "./dist/static/svg", //处理后的SVG存放目录

            html: "./test" //html编译后的存放目录
        }
    }
}
