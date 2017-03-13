/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * nodejs中的路径处理模块
 * http://javascript.ruanyifeng.com/nodejs/path.html
 */
import path from 'path';

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
 * 研发任务
 * gulp dev
 */
import gulpDev from './dev'; //研发任务

/**
 * 生产任务
 * gulp dist
 */
import gulpDist from './dist'; //生产任务

/**
 * 通过sftp将编译后的dist发布到服务器（依赖dist任务）
 * gulp sftp
 */
import gulpSftp from './sftp';

/**
 * 压缩 dist 目录并生成zip文件
 * gulp zip
 */
import gulpZip from './zip';

/**
 * svg 转换成字体
 * gulp svg2icon
 */
import gulpSvg2Icon from './svg2icon';

/**
 * 默认任务(执行研发任务)
 * gulp
 */
import gulpDefault from './default';

/**
 * 获取 .fezrc 配置文件
 * https://github.com/dominictarr/rc
 * 每个项目下面的rc配置文件 会覆盖此处的默认配置
 */
let config = require('rc')('fez', {

    /**
     * 项目目录名称
     */
    "projectName": process.cwd().split(path.sep).pop(),

    /**
     * 研发环境 browsersync配置信息
     */
    "browsersync": {
        "available": true, //开启浏览器自动化刷新
        "port": 8080, //本地服务器的默认端口
        "startPath": "zindex.html" //打开浏览器默认访问的页面
    },

    /**
     * 研发环境 使用二维码在移动端扫描测试页面
     * 研发环境输入http://xxxx/zindex.html访问
     */
    "useQrCodeHtml": true,

    /**
     * mock配置
     * @if MOCK
     * -------
     * @endif
     */
    "useMock": {
        "dev": false, //dev打包使用Mock数据
        "dist": false //dist打包使用Mock数据
    },

    /**
     * 研发环境 Javascript 语法自动化测试
     * .jshintrc可做详细配置
     */
    "useJsHint": {
        "available": false, //启用 jshint 自动化测试
        "files": "./src/views/**/*.js" //检测文件
    },

    /**
     * 选择css编译器【取值:less/sass/css】
     */
    "cssCompiler": "less",

    /**
     * 启用 PX => REM 自动化转换
     * 如果启用 REM 转换需要在公共样式中对<html>设置基准值
     * 通过 media媒体查询 为 <html> 设置不同值 以实现在不同的屏幕中等比缩放
     */
    "useREM": {
        "css": {
            "available": false, //启用 css 中的 px => rem 转换 【包含less,sass】
            /**
             * 配置参考：https://github.com/cuth/postcss-pxtorem
             */
            "options": {
                "rootValue": 16, //相对于html根字体大小
                "unitPrecision": 5, //允许REM单位增长到的十进制数
                "propList": ["*"], //可以从px更改为rem的属性
                "selectorBlackList": [], //要忽略的选择器
                "replace": true, //替换包含rems的规则，而不是添加fallback
                "mediaQuery": false, //允许在媒体查询中转换px
                "minPixelValue": 0 //设置要替换的最小像素值
            }
        }
    },

    /**
     * 生产环境 启用 图片 => webp 自动化转换
     */
    "useWebp": true,

    /**
     * 生产环境 启用自动化添加文件版本号(md5)
     */
    "useMd5": true,

    /**
     * 生产环境 启用增量编译
     */
    "compileChanged": false,

    /**
     * 生产环境 启用js压缩
     */
    "useJsMin": true,

    /**
     * 生产环境 css压缩配置
     */
    "useCssMin": {
        "available": true,
        "options": {
            "safe": true,
            "reduceTransforms": false,
            "advanced": false, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            "compatibility": "ie7", //保留ie7及以下兼容写法(hack写法) 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            "keepSpecialComments": 0 //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }
    },

    /**
     * 生产环境 html压缩配置
     */
    "useHtmlMin": {
        "available": true,
        //配置参考 https://github.com/kangax/html-minifier
        "options": {
            "removeComments": true, //清除HTML注释
            "collapseWhitespace": true, //压缩HTML
            "collapseBooleanAttributes": true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
            "removeEmptyAttributes": true, //删除所有空格作属性值 <input id="" /> ==> <input />
            "removeScriptTypeAttributes": true, //删除<script>的type="text/javascript"
            "removeStyleLinkTypeAttributes": true, //删除<style>和<link>的type="text/css"
            "minifyJS": true, //压缩页面JS
            "minifyCSS": true //压缩页面CSS
        }
    },

    /**
     * 生产环境 上传sftp服务器配置信息
     */
    "sftp": {
        "host": "xxx.xxx.xxx.xxx",
        "port": "22",
        "user": "root",
        "password": "",
        "remotePath": "/var/www/html/fez-web",
        "includeHtml": true //是否包含 html 文件
    },

    /**
     * 生产环境 启用CDN静态资源url替换
     */
    "useCdn": {
        "available": false,
        "base": "http://fezcdn.com/", //默认CDN地址
        "js": "http://js.fezcdn.com/", //脚本CDN地址
        "css": "http://css.fezcdn.com/", //样式CDN地址
        "images": "http://img.fezcdn.com/", //图片CDN地址
        "fonts": "http://fonts.fezcdn.com/" //字体CDN地址
    },

    /**html自动化注入文件*
     * 【支持自定义打包多个文件到一个文件】
     * 【支持自定义打包单个文件】
     * 【未配置的文件自动打包成一个文件】
     * 【插入页面顺序以字母或数字降序排列-解决插入页面的脚本文件依赖关系】
     * 【打包顺序以文件配置先后降序排列-解决打包文件间的依赖关系】
     */
    "useInject": {
        /**
         * ---------- bower打包格式 仅对 生产环境------------
         * 打包文件支持 gulp格式的正则文件名
         * {
         *     "target": "{排序序号}-vendor-{打包名称}.js",
         *     "contain": ["{文件1}", "{文件2}", "{文件3}"]
         * }
         */
        "bower": {
            "available": false, //启用 bower 文件自动化注入
            "js": [],
            "css": []
        },
        /**
         * 【支持单个文件指定注入到某些页面】
         * （命名规则：assign-{页面名}-{页面名}-{other}
         */
        "lib": {
            "available": false, //启用 公共 文件自动化注入
            "css": "*common*", //以common命名的样式文件会注入到所有的页面
            /*
             * ---------- 公共脚本打包格式 仅对 生产环境------------
             * 打包文件支持 gulp格式的正则文件名
             * {
             *     "target": "{排序序号}-common-{打包名称}.js",
             *     "contain": ["{文件1}", "{文件2}", "{文件3}"]
             * }
             */
            "js": []
        },
        /**
         * 【支持src目录中的样式及编译后的逻辑脚本自动化注入到对应的页面】
         */
        "views": false //启用 业务目录 文件自动化注入
    },

    /**
     * bowserify配置
     */
    "browserify": {
        "options": {
            "extensions": [], // import require 引入文件时可以省略的扩展名
            "paths": ["./src/views"] // import require 引入文件的根路径
        }
    },

    /**
     * svg转icon配置
     * 执行`gulp svg2icon`自动生成icon字体及对应的样式文件
     */
    "svgIcons": {
        "src": "./src/static/svgicons/", //存放svg图标的路径
        "dist": "./src/static/fonts/", //输出字体路径
        /**
         * 配置参考
         * https://github.com/backflip/gulp-iconfont-css
         */
        "fontName": "customFont", //生成的字体名称
        "targetPath": "../styles/custom-icons.less", //生成的样式文件(扩展名可以是.less,.scss,.css)
        "fontPath": "../fonts/" //生成的样式引用字体的路径
    },

    /**
     * 路径配置
     */
    "paths": {
        "dir": "./",
        /**
         * 源码目录配置
         */
        "src": {
            "dir": "./src", //源码根目录

            "img": "./src/static/images/**/*.{png,jpg,gif,ico}", //图片目录

            "slice": "./src/static/slice/**/*.png", //雪碧图存放目录

            "fonts": "./src/static/fonts/**/*.{otf,eot,svg,ttf,woff,woff2}", //字体存放目录

            "lib": "./src/lib/**/*.js", //第三方公共库

            "appJs": "./src/views/*/index.js", //每个页面目录下的index.js 入口文件
            "appJsALL": "./src/views/**/*.js", //所有业务层js文件，用于监视改动自动刷新

            "css": "./src/static/styles/*.css", //页面中引用的样式，工程只编译样式根目录下的文件
            "cssAll": "./src/static/styles/**/*.css", //所有业务层css文件，用于监视改动自动刷新

            "less": "./src/static/styles/*.less", //页面中引用的样式，工程只编译样式根目录下的文件
            "lessAll": "./src/static/styles/**/*.less", //所有业务层less文件，用于监视改动自动刷新

            "sass": "./src/static/styles/*.scss", //页面中引用的样式，工程只编译样式根目录下的文件
            "sassAll": "./src/static/styles/**/*.scss", //所有业务层sass文件，用于监视改动自动刷新

            "html": ["./src/views/**/*.html", "!./src/views/_*/**.html", "!./src/views/_*/**/**.html"], //所有html文件
            "htmlAll": "./src/views/**/*.html" //用于监视改动html自动刷新
        },

        /**
         * 开发目录配置
         */
        "dev": {
            "dir": "./dev", //开发环境根目录

            "lib": "./dev/lib", //公共库文件生成目录

            "appjs": "./dev/static/js", //编译后的业务逻辑存放目录

            "css": "./dev/static/css", //编译后的css代码存放目录

            "fonts": "./dev/static/fonts", //编译后的字体文件存放目录

            "html": "./dev" //html编译后的存放目录
        },

        /**
         * 缓存目录配置
         */
        "tmp": {
            "dir": "./tmp", //缓存根目录

            "lib": "./tmp/lib", //公共库文件生成目录

            "appjs": "./tmp/static/js", //编译后的业务逻辑存放目录

            "css": "./tmp/static/css", //编译后的css代码存放目录

            "fonts": "./tmp/static/fonts", //编译后的字体文件存放目录

            "img": "./tmp/static/images", //压缩后的图片存放目录

            "sprite": "./tmp/static/sprite", //自动生成雪碧图后的存放目录

            "html": "./tmp" //html编译后的存放目录
        },

        /**
         * 生产目录配置
         */
        "dist": {
            "dir": "./dist", //生产环境根目录

            "lib": "./dist/lib", //公共库文件生成目录 (已废弃)

            "appjs": "./dist/static/js", //编译后脚本代码存放目录

            "css": "./dist/static/css", //编译后的css代码存放目录

            "fonts": "./dist/static/fonts", //编译后的字体文件存放目录

            "img": "./dist/static/images", //压缩后的图片存放目录

            "sprite": "./dist/static/sprite", //自动生成雪碧图后的存放目录

            "html": "./dist" //html编译后的存放目录
        }
    }
});

export default () => {
    gutil.log("---------------------------------------");
    gutil.log(gutil.colors.cyan("* 欢迎使用 FEZ 前端模块化工程开发框架 *"));
    gutil.log("---------------------------------------");
    gulpDev(gulp, config);
    gulpDist(gulp, config);
    gulpDefault(gulp, config);
    gulpSftp(gulp, config);
    gulpZip(gulp, config);
    gulpSvg2Icon(gulp, config);
};
