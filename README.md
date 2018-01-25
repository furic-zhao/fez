<p align="center"><a href="http://fez.jd.com" target="_blank"><img width="240"src="https://github.com/furic-zhao/fez-demo-handlebars/blob/master/src/static/images/fez-logo.png?raw=true"></a></p>

# FEZ
[FEZ](http://fez.jd.com) 是面向 前端模块化工程 的开发框架。主要目的是统一前端开发模式和项目开发结构，自动化前端工作流，提高开发效率和开发质量，引入持续集成等软件工程的标准流程，集成众多业界先进的解决方案，让研发人员更专注于业务逻辑的实现。核心包括功能模块化、结构规范化、及开发自动化。

## FEZ倡导的前端开发理念
- 采用响应式界面布局，一份代码各种终端设备兼容，自动适配PC端、手机端、PAD端、及各种大小的屏幕，并可以嵌入任何APP中使用。为产品的多元化几何倍的提高开发效率，极大降低多平台项目的开发成本。
- 模块式开发，将复杂的系统细分为模块，分治管理，并有统一的文件结构，兼顾模块的通用和复用原则，极大提高项目的功能扩展和可维护性。
- 积木式、组件化快速构建页面，使用API接口/Mock数据前后端分离、并在流程上让研发、设计、测试团队、并行工作，极大提高团队研发效率。
- 使用国际前沿的前端工程自动化技术解决项目的资源管理和大量重复的代码编译工作。

## FEZ使用场景
- 【一份代码支持多终端响应式WEB应用】参考示例：[fez-demo-handlebars](https://github.com/furic-zhao/fez-demo-handlebars)
- 【基于Vue的高性能大中型WEB应用】参考示例：[fez-demo-vue](https://github.com/furic-zhao/fez-demo-vue)
- 【基于React的高性能大中型WEB应用】参考示例：[fez-demo-react](https://github.com/furic-zhao/fez-demo-react)
- 【高性能移动端混合APP及H5应用】参考示例：[fez-demo-framework7](https://github.com/furic-zhao/fez-demo-framework7)
- 【快速构建中小型官方网站、活动、专题、宣传页面】参考示例：[fez-demo-75team](https://github.com/furic-zhao/fez-demo-75team)  [fez-web](https://github.com/furic-zhao/fez-web)
- 【网页中显示艺术/特殊字体的官网网站、活动专题】参考示例：[fez-demo-fontmin](https://github.com/furic-zhao/fez-demo-fontmin)

## FEZ核心特性

### 功能模块化

[FEZ](http://fez.jd.com) 支持使用[ES6 Module](http://es6.ruanyifeng.com/#docs/module)来组织前端代码，并支持使用ES6标准特性开发项目，通过[Babel](http://babeljs.cn/)编译完美运行在浏览器中。可以整合如[Vue](https://cn.vuejs.org/)、[React](https://github.com/facebook/react)等MVVM框架实现[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)形式的高效开发体验。

> 模块化是一种处理复杂系统分解为更好的可管理模块的方式。每个模块完成一个特定的子功能，所有的模块再进行统一的拼装和加载，成为一个整体，完成整个系统所要求的功能。
> 有关模块化的更多知识请参考：【[https://github.com/fouber/blog](https://github.com/fouber/blog)】【[https://www.zhihu.com/question/37011441](https://www.zhihu.com/question/37011441)】

### 结构规范化

[FEZ](http://fez.jd.com) 将复杂的系统划分为功能页面(组件)，将复杂的页面(组件)划分为若干个模块，将模块分为：获取数据、渲染显示、交互操作，并且都有统一的文件结构。

#### 统一的文件系统结构

- 页面目录模块化结构

````bash
views
└── page1
    ├── index.html          /*page1 Html页面*/
    ├── index.js            /*page1 页面入口脚本*/
    └── module
        ├── module1         /*模块1 目录*/
        │   ├── index.js    /*模块1 逻辑脚本*/
        │   ├── index.hbs   /*模块1 handlebars模板(可选)*/
        │   └── service.js  /*模块1 数据处理脚本*/
        └── module2
            ├── index.vue   /*模块2 基于Vue的单文件组件(可选)*/
            └── service.js  /*模块2 数据处理脚本*/

````

> `service.js`也可以放在页面根目录。

- 样式目录模块化结构

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

#### 规范化

- 【目录结构规范化】FEZ支持可定制化的目录结构
- 【代码规范化】FEZ可开启JSHint对JS代码做规范性的自动化检测
- 【前后端接口规范化】FEZ 附带有[API文档编写平台](http://fez.jd.com/apidoc)

> 规范化在项目中对于后续功能的扩展和可维护性起着非常重要的作用，直接影响项目的开发质量和功能迭代速度。


### 开发自动化

> FEZ 集成了大量自动化前端工作流。任何机械的重复性的工作都应该交给 FEZ 来完成。

- 自动化搭建本地研发环境，快速响应文件更改并自动刷新浏览器。
- 自动化同步浏览器中滚动页面、点击等行为到其他浏览器和设备中
- 自动化编译ES6或CommonJS标准的JS代码，自动化生成source map便于浏览器端调试。
- 自动化编译SASS/LESS => CSS文件，自动化添加CSS3的各种浏览器前缀。
- 自动化处理第三方库样式、项目公共样式、页面样式并自动化注入到页面。
- 自动化处理第三方库脚本、项目公共脚本、页面逻辑脚本并自动化注入到页面。
- 自动化搜索、下载、更新、管理开源库资源，根据配置自动化做资源合并。
- 自动化压缩JS、CSS、HTML、图片、字体等静态资源。
- 自动化Svg转Icon图标、雪碧图合成、移动端高清@2x图片适配，并自动化生成对应样式。
- 自动化Svg图标合并、自动化使用symbol形式引入页面。
- 自动化转换所有CSS样式中的PX单位为REM单位。
- 自动化转换所有图片为WebP格式并生成对应样式文件。
- 自动化注入WebP浏览器支持检测脚本并替换所有的WebP文件。
- 自动化生成所有静态资源的MD5版本号。
- 自动化将所有静态资源添加CDN前缀。
- 自动化搭建用于测试上线代码的多终端测试环境。
- 自动化通过SFTP部署上线、或部署静态资源。
- 自动化通过Mock方式构建随机数据，模拟研发和上线的数据环境。
- 自动化创建统一结构化项目、及统一结构化的项目页面。
- 自动化转换TTF为网页字体(eot,svg,ttf,woff,woff2)并生成font-face样式文件。

## FEZ安装使用

- Mac系统推荐使用 [iterm2](http://iterm2.com/) 及 [oh my zsh](http://ohmyz.sh/)
- 类 Unix 系统，请打开任意终端输入命令执行。
- Windows 用户请先安装 [git](http://git-scm.com/)，然后在 [Git Bash](http://git-for-windows.github.io/) 下执行命令

### 下载

- 使用Git下载(推荐)

```bash
git clone git@github.com:furic-zhao/fez.git

//或者

git clone https://github.com/furic-zhao/fez.git
```

- 使用浏览器下载
将`https://github.com/furic-zhao/fez/archive/master.zip`下载解压到任意目录。

### 安装

#### 安装 Node 和 NPM

- 详细过程参考官网 https://nodejs.org (中文网站 http://nodejs.cn/)
- 支持所有Node的发行版本，建议使用最新稳定版 6.x 。
- Ubuntu 用户使用 `apt-get` 安装 node 后，安装的程序名叫 `nodejs`，需要软链成 `node`
- Windows 用户安装完成后需要在 CMD 下确认是否能执行 node 和 npm

> FEZ不能保证所有 window系统 下默认的 Nodejs 环境都能正常运行。可以尝试安装nodejs的[windows开发工具集](https://github.com/felixrieseberg/windows-build-tools)

#### 全局安装 Gulp4.0

- 任意目录执行

```bash
npm install gulpjs/gulp#4.0 -g
```

- 详情请参考 Github 社区 [Gulp](https://github.com/gulpjs/gulp)

> 目前Gulp发行版本是3.9.1，如果安装过全局的非4.0版本 gulp 请先卸载 `npm uninstall gulp -g`

#### 全局安装 Bower (可选安装)

- 任意目录执行

```bash
npm install bower -g
```
> 使用Bower主要是为了方便管理基于浏览器的第三方框架库，通过页面自动化注入技术解决页面框架库的引入和管理问题，如果想用固定的CDN资源、及手动在页面引入第三方框架库，可以选择不安装。

#### 安装FEZ的NPM依赖包

- 在 FEZ 工程目录执行

```bash
npm install
```

### 创建项目
- 在 FEZ 工程目录执行

```bash
gulp fezinit --dir=demozhj
```
在FEZ工程目录下会自动创建结构化的 `demozhj` 项目

```bash
demozhj
├── fez.config.js            /*FEZ功能配置文件*/
├── bower.json               /*bower配置文件*/
├── package.json             /*npm配置文件*/
├── gulpfile.babel.js        /*gulp入口文件*/
├── shim.js                  /*browserify-shim入口文件*/
└── src                      /*源码目录*/
    ├── custom               /*自定义文件目录*/
    ├── lib                  /*项目公共库文件目录*/
    ├── static               /*静态资源目录*/
    │   ├── fonts            /*字体目录*/
    │   ├── images           /*图片目录*/
    │   └── styles           /*样式目录*/
    │       └── index.less   /*首页样式文件*/
    └── views                /*业务逻辑存放目录*/
        ├── index            /*首页目录*/
        │   ├── index.html   /*首页Html文件*/
        │   ├── index.js     /*首页业务逻辑脚本文件*/
        │   └── module       /*首页模块目录*/
        └── public           /*业务逻辑公共文件目录*/
            ├── module       /*公共模块目录*/
            └── utils        /*公共工具类库目录*/
```

### 运行项目

- 进入 `demozhj` 项目目录 执行

```bash
gulp
```

> FEZ 会自动打开默认浏览器进入研发环境，项目任意文件的更改都会自动刷新浏览器，请尽情享用FEZ为你带来的愉悦开发体验！

## 命令说明

- 研发环境（在项目目录执行）

```bash
gulp
```

> FEZ 会自动打开系统默认浏览器进入研发环境，您可以打开多个不同终端和不同类型的浏览器访问同一开发页面，开发过程中任何文件的更改，或是在任何一个终端的浏览器中的操作行为，都会同步到每个终端界面，实时查看在每个终端的修改效果。

- 生产部署（在项目目录执行）

```bash
gulp dist
```

> FEZ 会自动化编译源码目录中的所有文件(js、sass、less、html、图片、字体等)，自动化生成md5版本号，并将编译后的上线代码发布到`dist`目录。之后通过其它途径、或流程工具发布`dist`目录到线上服务器。

- 本地测试上线代码（在项目目录执行）

```bash
gulp test
```

> FEZ 会自动化构建本地测试环境，并自动打开系统默认浏览器对`dist`上线目录中的代码真实性的模拟服务器上的操作效果，可以让测试人员打开多个不同终端和不同类型的浏览器一次性测试所有平台、所有浏览器中的最终产品的交互和操作。

- SSH上传（在项目目录执行）

```bash
gulp sftp
```

> FEZ 会调用项目目录中`fez.config.js`的`sftp`配置信息，通过SSH方式快速部署`dist` 中的上线代码，或是部署`dist`目录中的静态资源。

- 打包压缩（在项目目录执行）

```bash
gulp zip
```

> FEZ 会自动化将`dist`目录中所有上线代码打包成`dist.zip`文件，用于通过其它流程工具部署上线。

- svg => icon 转换（在项目目录执行）

```bash
gulp svg2icon
```
> FEZ 会调用项目目录中`fez.config.js`的`svgIcons`配置信息，自动化转换svg图标为icon字体文件并生成对应的样式文件。

- 合并雪碧图（在项目目录执行）

```bash
gulp sprite
```
> FEZ 会调用项目目录中`fez.config.js`的`sprites`配置信息，自动化合并`slice`目录中的小图标为雪碧图并生成sprite.png图片到`images/sprite／`目录，同时生成对应的样式文件(可配置生成css/less/sass/scss)到`styles/sprite/`目录

- 创建结构化模版页（在项目目录执行）

```bash
gulp page --dir=demopage
```
demopage 页面结构

```bash
.
└── src
    ├── static
    │   └── styles
    │       └── demopage.less  /*demopage 页面样式文件*/
    └── views
        └── demopage           /*demopage 页面目录*/
            ├── index.html     /*demopage HTML页面*/
            ├── index.js       /*demopage 业务逻辑脚本文件*/
            └── module         /*demopage 模块目录*/
```

- 压缩ttf字体（在项目目录执行）

```
gulp fontmin
```

> FEZ 会调用项目目录中`fez.config.js`的`minfonts`设置的网页中要显示的文本信息，将`src/static/ttf/`目录中存放的普通大文件ttf字体生成网页字体(eot,svg,ttf,woff,woff2)，并将生成后的小文件网页字体格式存放在`src/static/fonts/`目录下，同时生成对应的`@font-face`样式文件(css,less,sass,scss)，可在页面样式中直接引用。FEZ让你在网页中大量的使用特殊字体成为可能，请尽情发挥设计师的想象力。

> 示例：[fez-demo-fontmin](https://github.com/furic-zhao/fez-demo-fontmin)

- 深度图片压缩（在项目目录执行）

```
gulp tinypic
```

> FEZ 会对`src/static/tinypic`目录中的图片深度无损压缩，压缩率达到50%以上，压缩前后的图片质量几乎看不出来差别，请尽情享用FEZ为你带来的图片极致性能优化。具体使用请参考:[图片无损压缩wiki](https://github.com/furic-zhao/fez/wiki/深度无损压缩图片)


## FEZ升级

- 下载FEZ工程目录中的所有文件，覆盖本地的FEZ工程目录中的所有文件，然后执行`npm install`。
- 如果你是通过Git下载FEZ工程，在FEZ工程目录里面执行`git pull`，然后执行`npm install`。

> 每次升级请确保在FEZ工程目录执行`npm install`

## 待续...


