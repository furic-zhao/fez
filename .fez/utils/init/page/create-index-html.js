/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
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
  <h1>${opts.name} 页面创建成功</h1>
  <h3>页面目录结构</h3>
  <pre>
.
└── src
    ├── static
    │   └── styles
    │       └── ${opts.directory}.${opts.fezconfig.style.compiler}  //${opts.name}样式文件
    └── views
        └── ${opts.directory}  //${opts.name} 页面目录
            ├── index.html  //${opts.name} HTML页面
            ├── index.js  //${opts.name} 业务逻辑脚本文件
            └── module  //${opts.name} 模块目录

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
    directory: `src/views/${opts.directory}`,
    fileName: 'index.html',
    data: file,
    codeType: 'html',
    success() {
      fancyLog(`创建 src/views/${opts.directory}/index.html 成功`);
    },
    error() {
      fancyLog(`创建 src/views/${opts.directory}/index.html 失败`);
    }
  });
}
