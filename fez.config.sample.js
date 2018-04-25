/**
 * ==================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ==================================
 */

export default {

  /**
   * -------------------------------
   * webpack配置
   * -------------------------------
   */
  webpack: {
    /**
     * webpack.config.js
     * 根据需求场景每个项目均可安装loader及plugin
     */
    config: {
      module: {
        rules: []
      }
    },
    /**
     * 用于提取合并公共模块
     * {
     *   target: '{打包名称}',
     *   chunk: ['{chunk1名称}','{chunk2名称}','{chunk3名称}']
     * }
     */
    extract: {
      js: []
    }
  },

  /**
   * -------------------------------
   * FEZmock配置
   * @if MOCK
   * code...
   * @endif
   * -------------------------------
   * 配置参考:
   * https://github.com/furic-zhao/fezmock/wiki
   */
  useMock: {
    dev: false, // dev打包使用Mock数据
    dist: false // dist打包使用Mock数据
  },

  /**
   * 使用eslint检测代码，具体配置可参考FEZ工程目录.eslintrc.js
   * FEZ默认使用standard编码规则:https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md
   * 每个项目中的.eslintrc.js将覆盖FEZ工程目录中的.eslintrc.js配置
   */
  eslint: {
    available: false
  },

  /**
   * -------------------------------
   * 样式配置
   * -------------------------------
   */
  style: {
    /**
     * 选择css编译器【取值:less/sass/scss/styl/css】
     * 自动化创建样式文件的扩展名
     */
    compiler: 'scss',

    /**
     * less配置
     * https://www.npmjs.com/package/gulp-less
     */
    lessOptions: {},

    /**
     * sass配置
     * https://www.npmjs.com/package/gulp-sass
     */
    sassOptions: {},

    /**
     * stylus配置
     * https://github.com/stevelacy/gulp-stylus
     */
    stylusOptions: {},

    /**
     * autoprefixer配置
     * "mobile": ["Android >= 4", "iOS >= 6"],
     * "pc": ["last 3 versions", "Explorer >= 8", "Chrome >= 21", "Firefox >= 1", "Edge 13"],
     * "all":["Android >= 4", "iOS >= 6", "last 3 versions", "Explorer >= 8", "Chrome >= 21", "Firefox >= 1", "Edge 13"]
     */
    autoprefixerOptions: {
      browsers: ["Android >= 4", "iOS >= 6", "last 3 versions", "Explorer >= 8", "Chrome >= 21", "Firefox >= 1", "Edge 13"]
    }
  },

  /**
   * -------------------------------
   * 启用 PX => REM 自动化转换
   * 如果启用 REM 转换需要在公共样式中对<html>设置基准值
   * 通过 media媒体查询 为 <html> 设置不同值 以实现在不同的屏幕中等比缩放
   * -------------------------------
   */
  useREM: {
    css: {
      available: false, //启用 css 中的 px => rem 转换 【包含less,sass】
      /**
       * 配置参考:
       * https://github.com/cuth/postcss-pxtorem
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
   * -------------------------------
   * 压缩src/static/images目录下png、jpg、jpeg、gif图片
   * -------------------------------
   */
  imagemin: {
    /**
     * jpg图片压缩质量
     */
    jpg: {
      quality: 85
    }
  },

  /**
   * -------------------------------
   * 整合https://tinypng.com/深度压缩图片
   *
   * 将源图片保存在src/static/tinypic目录中
   * 执行gulp tinypic
   * 压缩图片输出到src/static/images目录
   * -------------------------------
   */
  tinypic: {
    /**
     * [apikey 申请:https://tinypng.com/developers]
     */
    apikey: '',
    keep: false // 是否保留源图片
  },

  /**
   * -------------------------------
   * 压缩ttf
   * -------------------------------
   */
  fontMin: {

    /**
     * 填写需要显示特殊字体的文本内容
     */
    text: ``
  },

  /**
   * -------------------------------
   * 生产环境 启用 图片 => webp 自动化转换
   * -------------------------------
   */
  useWebp: {
    available: false,
    /**
     * 配置参考:
     * https://github.com/imagemin/imagemin-webp
     */
    options: {
      quality: 75, //将质量因子设置为0到100。
      alphaQuality: 100, //将透明度 - 压缩质量设置为0到100。
      method: 4, //指定要使用的压缩方法，介于0（最快）和6（最慢）之间。此参数控制编码速度与压缩文件大小和质量之间的折衷。
      sns: 80, //设置空间噪声整形的幅度在0和100之间
      lossless: false //无损编码图像
    }
  },

  /**
   * -------------------------------
   * 生产环境 启用CDN静态资源url替换
   * -------------------------------
   */
  useCdn: {
    available: false,
    extFile: 'css,html', // 替换CDN地址的文件扩展名
    base: "//fezcdn.com/cdndemo/", // 默认CDN地址
    // js: "http://js.fezcdn.com/", // 脚本CDN地址
    // css: "http://css.fezcdn.com/", // 样式CDN地址
    // images: "http://img.fezcdn.com/", // 图片CDN地址
    // fonts: "http://fonts.fezcdn.com/" // 字体CDN地址
  },

  /**
   * -------------------------------
   * 生产环境 上传sftp服务器配置信息
   * -------------------------------
   */
  sftp: {
    host: "xxx.xxx.xxx.xxx", // ssh服务器地址
    port: "22", // ssh服务器端口号,默认是22
    user: "root", // ssh服务器登录用户名,默认是root
    password: "", // ssh服务器登录密码
    remotePath: "/var/www/html", // 上传到ssh服务器的目录
    includeHtml: true // 是否包含 html 文件
  },

  /**
   * -------------------------------
   * HTML自动化注入
   * 【支持自定义打包多个文件到一个文件】
   * 【支持自定义打包单个文件】
   * 【未配置的文件自动打包成一个文件】
   * 【插入页面顺序以字母或数字降序排列-解决插入页面的脚本文件依赖关系】
   * 【打包顺序以文件配置先后降序排列-解决打包文件间的依赖关系】
   * -------------------------------
   */
  useInject: {

    vendor: {
      available: true, //启用 vendor 文件自动化注入

      /**
       * 合并vendor脚本
       * {
       *    target: '{排序序号}-vendor-{打包名称}.js',
       *    contain: ['{文件1}.js', '{文件2}.js', '{文件3}.js']
       * }
       */
      js: [],

      /**
       * 合并vendor样式
       * {
       *    target: '{排序序号}-vendor-{打包名称}.css',
       *    contain: ['{文件1}.css', '{文件2}.css', '{文件3}.css']
       * }
       */
      css: []
    },

    common: {
      available: true, //启用 common 文件自动化注入

      /*
       * 合并common脚本
       * {
       *    target: '{排序序号}-common-{打包名称}.js',
       *    contain: ['{文件1}', '{文件2}', '{文件3}']
       * }
       *
       * 【支持单个文件指定注入到某些页面】
       * （命名规则：assign-{页面名}-{页面名}-{文件名}
       */
      js: [],

      /**
       * common命名的样式文件会注入到所有的页面
       * src/staitc/styles/common-{文件名}.{less,scss,styl,css}
       */
      css: "*common*"
    },

    /**
     * 页面对应的js、css自动注入到页面
     * src/static/styles/{对应的页面名称}.{less,scss,styl,css}
     * src/views/{对应的页面目录名称}/index.js
     */
    page: true //启用 对应页面脚本和样式 自动化注入
  },

  /**
   * -------------------------------
   * svg转icon配置
   * 执行`gulp svg2icon`自动生成icon字体及对应的样式文件
   * -------------------------------
   */
  svgIcons: {
    src: "./src/static/svgicons/", //存放svg图标的路径
    dist: "./src/static/fonts/", //输出字体路径

    /**
     * 配置参考:
     * https://github.com/backflip/gulp-iconfont-css
     */
    fontName: "customFont", //生成的字体名称
    targetPath: "../styles/custom-icons.less", //生成的样式文件(扩展名可以是.less,.scss,.css)
    fontPath: "../fonts/" //生成的样式引用字体的路径
  },

  /**
   * -------------------------------
   * Svg图标symblo形式使用配置
   * -------------------------------
   */
  svgSymbol: {
    available: false, //启用svg图标自动化symbol合并

    /**
     * 配置参考:
     * https://github.com/Hiswe/gulp-svg-symbols#options
     */
    options: {
      id: 'fez-%f',
      class: '.fez-%f'
    }
  },

  /**
   * -------------------------------
   * 雪碧图配置
   * -------------------------------
   * 配置参考：
   * https://github.com/twolfson/gulp.spritesmith
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
      cssName: 'sprite.scss',
      padding: 4,
      cssFormat: "scss",
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
   * -------------------------------
   * 生产环境 启用增量编译
   * -------------------------------
   */
  compileChanged: false,

  /**
   * -------------------------------
   * 生产环境启用js压缩
   * -------------------------------
   */
  useJsMin: true,

  /**
   * -------------------------------
   * 生产环境生成md5版本号
   * -------------------------------
   */
  useMd5: {
    available: true,
    /**
     * 配置参考:
     * https://github.com/smysnk/gulp-rev-all
     */
    options: {}
  },

  /**
   * -------------------------------
   * 生产环境css压缩配置
   * -------------------------------
   */
  useCssMin: {
    available: true,
    options: {
      safe: true,
      reduceTransforms: false,
      advanced: false, // 类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
      compatibility: "ie8", // 保留ie7及以下兼容写法(hack写法) 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
      keepSpecialComments: 0 // 保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
    }
  },

  /**
   * -------------------------------
   * 生产环境 html压缩配置
   * -------------------------------
   */
  useHtmlMin: {
    available: true,
    /**
     * 配置参考:
     * https://github.com/kangax/html-minifier
     */
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
   * -------------------------------
   * browsersync配置信息
   * -------------------------------
   */
  browsersync: {
    dev: {
      available: true, // 研发环境是否开启浏览器自动化刷新
      /**
       * 配置参考:
       * http://www.browsersync.cn/docs/options/
       */
      options: {
        port: 8080, // 研发环境 本地服务器的默认端口
        startPath: "zindex.html"
      }
    },
    test: {
      /**
       * 配置参考:
       * http://www.browsersync.cn/docs/options/
       */
      options: {
        port: 8080, // 研发环境 本地服务器的默认端口
        startPath: "zindex.html"
      }
    }
  }
}
