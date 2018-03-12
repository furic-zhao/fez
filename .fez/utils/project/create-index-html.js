/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log'

/**
 * Nodejs处理路径
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
  <h1>${opts.name} 项目初始化成功</h1>
  <h3>项目目录结构</h3>
  <pre>
${opts.directory}
├── fez.config.js              // FEZ功能配置 文件
├── package.json               // 项目独立package配置 文件
├── gulpfile.babel.js          // gulp入口 文件
└── src                        // 源码 目录
    ├── lib                    // 公共Javascript 目录
    ├── static                 // 静态资源 目录
    │   ├── fonts              // 字体 目录
    │   ├── images             // 图片 目录
    │   └── styles             // 样式 目录
    │       └── index.${opts.fezconfig.style.compiler}     // 首页样式 文件
    └── views                  // 业务逻辑 目录
        ├── index              // 首页 目录
        │   ├── index.html     // 首页Html 文件
        │   ├── index.js       // 首页逻辑脚本 文件
        │   └── module         // 首页模块 目录
        └── public             // 业务逻辑公共文件 目录
            ├── module         // 公共模块 目录
            └── utils          // 公共工具类库 目录
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
      directory: `${opts.directory}/src/views/index`,
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
