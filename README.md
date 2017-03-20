# FEZ
[FEZ](http://fez.hestudy.com) 是面向 前端模块化工程 的开发框架。主要为解决 前端开发多人高效协作、提高开发质量、及项目功能扩展的快速迭代和可维护性等问题。核心包括功能模块化、结构规范化、及开发自动化。

## 核心特性

### 功能模块化

> 模块化是一种处理复杂系统分解为更好的可管理模块的方式。每个模块完成一个特定的子功能，所有的模块再进行统一的拼装和加载，成为一个整体，完成整个系统所要求的功能。

[FEZ](http://fez.hestudy.com) 支持使用[ES6 Module](http://es6.ruanyifeng.com/#docs/module)来组织前端代码，并支持使用ES6标准特性开发项目，通过编译完美运行在浏览器中。可以整合如[Vue](https://cn.vuejs.org/)等MVVM框架实现[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)形式的高效开发体验。

#### Javascript 模块化历史
- 上古时期  Module 设计模式
- 石器时代  Script Loader  不仅需要封装，还需要加载
- 蒸汽朋克  Module Loader  模块化架构的工业革命
- 号角吹响  CommonJS  征服世界的第一步要跳出浏览器
- 双塔奇兵  AMD/CMD  浏览器环境模块化方案
- 精灵宝钻  Browserify/Webpack  大势所趋，去掉这层包裹！
- 王者归来  ES6 Module  最后的战役

> 有关模块化的更多知识请参考：【[https://github.com/fouber/blog](https://github.com/fouber/blog)】【[https://www.zhihu.com/question/37011441](https://www.zhihu.com/question/37011441)】


### 结构规范化

[FEZ](http://fez.hestudy.com) 将复杂的系统划分为功能页面，将复杂的页面划分为若干个模块，将模块分为：获取数据、渲染显示、交互操作，并且都有统一的文件结构。

#### 统一的文件系统结构

- 页面模块结构

````bash
views
└── page1
    ├── index.html
    ├── index.js
    └── module
        ├── module1
        │   ├── index.js
        │   ├── index.hbs
        │   └── service.js
        ├── module2
        │   ├── index.vue
        │   └── service.js
        └── module3
            ├── index.js
            ├── module3-1
            │   ├── index.js
            │   ├── index.jade
            │   └── service.js
            └── module3-2
                ├── index.vue
                └── service.js
````

- 样式目录结构

````bash
static
└── styles
    ├── page1
    │   ├── module1.less
    │   ├── module2.less
    │   └── module3.less
    ├── page1.less
    ├── page2
    │   ├── module1.scss
    │   ├── module2.scss
    │   └── module3.scss
    └── page2.scss
````

- 图片目录结构

````bash
static
└── images
    └── page1
        ├── 1.jpg
        ├── 2.jpg
        └── folder
            ├── 1.png
            ├── 2.png
            └── 3.png
````

#### 统一的职责划分

- Service.js 专职提供各种方法处理API数据
- .hbs 或 .jade 负责页面的html模板
- index.js 或 index.vue 负责数据展现和交互操作

> 规范化在项目中对于后续功能的扩展和可维护性起着非常重要的作用，直接影响项目的开发质量和功能迭代速度。

- 【目录结构规范化】
- 【代码规范化】FEZ可开启JSHint对JS代码做规范性的自动化检测
- 【前后端接口规范化】FEZ 附带有[API文档编写平台](//doc.hestudy.com)

### 开发自动化

> 任何机械的重复性的工作都应该交给程序完成。FEZ集成了大量自动化前端工作流。

- 自动化搭建本地研发环境，快速响应文件更改并自动刷新浏览器。
- 自动化编译ES6或CommonJS标准的JS代码，自动化生成source map便于浏览器端调试。
- 自动化编译SASS/LESS => CSS文件，自动化添加CSS3的各种浏览器前缀。
- 自动化处理第三方库样式、项目公共样式、页面样式并自动化注入到页面。
- 自动化处理第三方库脚本、项目公共脚本、页面逻辑脚本并自动化注入到页面。
- 自动化搜索、下载、更新、管理开源库资源，根据配置并做自动化的资源合并。
- 自动化压缩JS、CSS、HTML、图片、字体等静态资源。
- 自动化SVG转ICON图标、雪碧图合成、移动端@2x/@3X图片适配，并自动化生成对应样式。
- 自动化转换所有CSS样式中的PX单位为REM单位。
- 自动化转换所有图片为WebP格式并生成对应样式文件。
- 自动化注入WebP浏览器支持检测脚本并替换所有的WebP文件。
- 自动化生成所有静态资源的MD5版本号。
- 自动化将所有静态资源添加CDN前缀。
- 自动化通过SFTP部署上线、或部署静态资源。

## 安装使用

### 安装

- Mac系统推荐使用 [iterm2](http://iterm2.com/) 及 [oh my zsh](http://ohmyz.sh/)
- 类 Unix 系统，请打开任意终端输入命令执行。
- Windows 用户请先安装 [git](http://git-scm.com/)，然后在 [Git Bash](http://git-for-windows.github.io/) 下执行命令

#### 安装 Node 和 NPM

- 详细过程参考官网 https://nodejs.org (中文网站 http://nodejs.cn/)
- 支持所有Node的发行版本，建议使用最新稳定版 6.x 。
- Ubuntu 用户使用 `apt-get` 安装 node 后，安装的程序名叫 `nodejs`，需要软链成 `node`
- Windows 用户安装完成后需要在 CMD 下确认是否能执行 node 和 npm

#### 全局安装 Gulp4.0

```bash
npm install gulpjs/gulp#4.0 -g
```

- 详情请参考 Github 社区 [Gulp](https://github.com/gulpjs/gulp)
- 目前Gulp发行版本是3.9.1，虽然4.0还未发布，依然阻止不了我们使用它高效的构建我们的项目。

> 如果安装过全局的非4.0版本 gulp 请先卸载 `npm uninstall gulp -g`

#### 全局安装 Bower

```bash
npm install bower -g
```
> 使用Bower主要是为了管理从 github 下载的第三方框架库，通过页面自动化注入技术解决页面框架库的引入和管理问题，如果想用固定的CDN资源，手动的引入页面，可以不安装，并在 项目根目录.fezrc 配置文件中将此配置关闭

### 运行 Demo 示例项目

#### 安装 NPM 包

- 进入fez 目录执行以下命令

```bash
npm install
```

#### 安装 Bower 包
- 进入项目 demo 目录执行以下命令

```bash
bower install
```

#### 运行 Demo 示例

- 在项目目录下执行

```bash
gulp
```

> FEZ 会自动打开默认浏览器进入研发环境，项目任意文件的更改都会自动刷新浏览器，请尽情享用FEZ为你带来的愉悦开发体验！

## 命令说明

- 研发环境

````bash
gulp
````

- 生产部署

````bash
gulp dist
````

- SSH上传

````bash
gulp sftp
````

- 打包压缩

````bash
gulp zip
````

- svg => icon 转换

````bash
gulp svg2icon
````

## 待续...




