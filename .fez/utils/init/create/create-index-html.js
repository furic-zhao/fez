/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * gulp插件的实用函数
 * https://github.com/gulpjs/gulp-util
 */
import gutil from 'gulp-util';

import writeFile from '../write';

export default (opts) => {
  const file = `
<!DOCTYPE HTML>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <meta name="apple-mobile-web-app-capable" content="no" />
    <meta name="format-detection" content="telephone=no">
    <title>${opts.name}</title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <!-- inject:bower:css -->
    <!-- bower框架库样式 -->
    <!-- endinject -->
    <!-- inject:lib:css -->
    <!-- 项目通用样式 -->
    <!-- endinject -->
    <!-- inject:views:css -->
    <!-- 页面样式 -->
    <!-- endinject -->
</head>

<body>
  <h1>${opts.name} 项目初始化成功</h1>
  <h3>默认已启用的功能</h3>
  <p>
    <ul>
      <li>本地研发环境，文件保存后快速响应文件更改并自动刷新浏览器。</li>
      <li>同步浏览器中滚动页面、点击等行为到其他浏览器和设备中</li>
      <li>编译ES6或CommonJS标准的JS代码，并生成source map便于浏览器端调试。</li>
      <li>编译LESS(默认使用less) => CSS文件，添加CSS3的各种浏览器（模式支持到IE8兼容模式）前缀。</li>
      <li>压缩JS、CSS、HTML、图片、字体等静态资源。</li>
      <li>发版生成所有静态资源的MD5版本号。</li>
    </ul>
  </p>
  <h3>目录结构</h3>
  <p>
    <pre>
.
├── fez.config.js /*FEZ功能配置文件*/
├── bower.json /*bower配置文件*/
├── package.json /*npm配置文件*/
├── gulpfile.babel.js /*gulp入口文件*/
├── shim.js /*browserify-shim入口文件*/
└── src /*源码目录*/
    ├── custom /*自定义文件目录*/
    ├── lib /*项目公共库文件目录*/
    ├── static /*静态资源目录*/
    │   ├── fonts /*字体目录*/
    │   ├── images /*图片目录*/
    │   └── styles /*样式目录*/
    │       └── index.less /*首页样式文件*/
    └── views /*业务逻辑存放目录*/
        ├── index /*首页目录*/
        │   ├── index.html /*首页Html文件*/
        │   ├── index.js /*首页业务逻辑脚本文件*/
        │   └── module /*首页模块目录*/
        └── public /*业务逻辑公共文件目录*/
            ├── module /*公共模块目录*/
            └── utils /*公共工具类目录*/
      </pre>
  </p>
  <h3>源码目录</h3>
  <p>
    <pre>
src
.
├── custom
├── lib
├── static
│   ├── fonts
│   ├── images
│   └── styles
│       └── index.less
└── views
    ├── index
    │   ├── index.html
    │   ├── index.js
    │   └── module
    └── public
        ├── module
        └── utils
      </pre>
  </p>
  <h3>研发目录</h3>
  <p>
    <pre>
dev
.
├── index.html
├── static
│   ├── css
│   │   └── index.css
│   └── js
│       ├── index.js
│       └── index.js.map
├── zindex
│   ├── css
│   │   └── bootstrap.min.css
│   └── js
│       ├── bootstrap.min.js
│       ├── handlebars-v4.0.5.min.js
│       ├── jquery-2.1.3.min.js
│       └── qrcode.min.js
└── zindex.html
      </pre>
  </p>
  <h3>发布目录</h3>
  <p>
    <pre>
dist
.
├── index.html
├── rev-manifest.json
└── static
    ├── css
    │   └── index-593d9d76c4.css
    └── js
        └── index-f3d06ba2f6.js
      </pre>
  </p>
    <!-- inject:bower:js -->
    <!-- bower框架库脚本 -->
    <!-- endinject -->
    <!-- inject:lib:js -->
    <!-- 项目通用脚本 -->
    <!-- endinject -->
    <!-- inject:views:js -->
    <!-- 页面脚本 -->
    <!-- endinject -->
</body>

</html>

    `;
  writeFile({
    directory: `${opts.directory}/src/views/index`,
    fileName: 'index.html',
    data: file,
    codeType: 'html',
    success() {
      gutil.log(`创建 ${opts.directory}/src/views/index/index.html 成功`);
    },
    error() {
      gutil.log(`创建 ${opts.directory}/src/views/index/index.html 失败`);
    }
  });
}
