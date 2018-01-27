/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ----------------------------------
 * 《奇舞团.致团领队应加宽》
 * 于2014年 360年会
 * ----------------
 * 应用开发事连连
 * 加班加点做支援
 * 宽厚待人情切切
 * 帅气凌厉奇舞团
 * ================================== */

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log';

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
    <!-- 使用bower安装的框架库CSS文件会被自动插入到此处 -->
    <!-- endinject -->
    <!-- inject:lib:css -->
    <!-- 样式目录所有包含common命名的编译后的CSS文件会被自动插入到此处 -->
    <!-- endinject -->
    <!-- inject:views:css -->
    <!-- 本页面对应的编译后的css文件会被自动插入到此处 -->
    <!-- endinject -->
</head>

<body>
  <h1>${opts.name} 项目初始化成功</h1>
  <h3>默认已启用的功能</h3>
    <ul>
      <li>构建本地研发环境，快速响应文件更改并自动刷新浏览器。</li>
      <li>编译ES6/ES7/CommonJS标准的代码，并生成source map便于浏览器端调试。</li>
      <li>编译LESS(默认使用less) => CSS文件，添加CSS3的各种浏览器（默认支持到IE8兼容模式）前缀。</li>
      <li>压缩JS、CSS、HTML、图片、字体等静态资源。</li>
      <li>发布项目生成所有静态资源的MD5版本号。</li>
    </ul>
  <h3>项目目录结构</h3>
  <pre>
${opts.directory}
├── fez.config.js              // FEZ功能配置 文件
├── package.json               // npm配置 文件
├── gulpfile.babel.js          // gulp入口 文件
├── shim.js                    // browserify-shim入口 文件
└── src                        // 源码 目录
    ├── lib                    // 公共Javascript 目录
    ├── static                 // 静态资源 目录
    │   ├── fonts              // 字体 目录
    │   ├── images             // 图片 目录
    │   └── styles             // 样式 目录
    │       └── index.less     // 首页样式 文件
    └── views                  // 业务逻辑 目录
        ├── index              // 首页 目录
        │   ├── index.html     // 首页Html 文件
        │   ├── index.js       // 首页逻辑脚本 文件
        │   └── module         // 首页模块 目录
        └── public             // 业务逻辑公共文件 目录
            ├── module         // 公共模块 目录
            └── utils          // 公共工具类库 目录
    </pre>

    <!-- inject:bower:js -->
    <!-- 使用bower安装的框架库JS文件会被自动插入到此处 -->
    <!-- endinject -->
    <!-- inject:lib:js -->
    <!-- 项目src/lib目录中所有的JS文件会被自动插入到此处 -->
    <!-- endinject -->
    <!-- inject:views:js -->
    <!-- 本页面对应的编译后的JS文件会被自动插入到此处 -->
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
      fancyLog(`创建 ${opts.directory}/src/views/index/index.html 成功`);
    },
    error() {
      fancyLog(`创建 ${opts.directory}/src/views/index/index.html 失败`);
    }
  });
}
