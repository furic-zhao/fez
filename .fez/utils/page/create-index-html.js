/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

import fancyLog from 'fancy-log'

/**
 * Nodejs路径处理
 * http://nodejs.cn/api/path.html
 */
import path from 'path'

import writeFile from './write'

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
    <!-- inject:vendor:css -->
    <!-- endinject -->
    <!-- inject:common:css -->
    <!-- endinject -->
    <!-- inject:page:css -->
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

    <!-- inject:vendor:js -->
    <!-- endinject -->
    <!-- inject:common:js -->
    <!-- endinject -->
    <!-- inject:page:js -->
    <!-- endinject -->
</body>

</html>

    `
  return new Promise((resolve, reject) => {
    writeFile({
      directory: `src/views/${opts.directory}`,
      fileName: 'index.html',
      data: file,
      codeType: 'html',
      success() {
        fancyLog(`创建 ${path.join(this.directory, this.fileName)} 成功`)
        resolve()
      },
      error() {
        fancyLog(`创建 ${path.join(this.directory, this.fileName)} 失败`)
        reject()
      }
    })
  })
}
