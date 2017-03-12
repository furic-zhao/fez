# FEZ
FEZ 是 前端模块化工程的构建工具。主要是为 前端开发多人高效协作、提高开发质量、及项目功能扩展的快速迭代和可维护性。核心包括功能模块化、UI组件化、结构规范化、及开发自动化。
## 快速开始

### 安装

- Mac系统推荐使用 [iterm2](http://iterm2.com/) 及 [oh my zsh](http://ohmyz.sh/)
- 类 Unix 系统，请打开任意终端输入命令执行。
- Windows 用户请先安装 [git](http://git-scm.com/)，然后在 [Git Bash](http://git-for-windows.github.io/) 下执行命令

#### 安装 Node 和 NPM

- 详细过程参考官网 https://nodejs.org (中文网站 http://nodejs.cn/)
- Node **版本要求** Node所有发行版本均支持。建议使用最新稳定版 6.x 。
- Ubuntu 用户使用 `apt-get` 安装 node 后，安装的程序名叫 `nodejs`，需要软链成 `node`
- Windows 用户安装完成后需要在 CMD 下确认是否能执行 node 和 npm

#### 全局安装 Gulp4.0

```bash
npm install gulpjs/gulp#4.0 -g
```

- 详情请参考 Github 社区 [Gulp](https://github.com/gulpjs/gulp)
- 目前Gulp发行版本是3.9.1，虽然4.0还未发布，依然阻止不了我们使用它构建我们的项目。

> 如果安装过全局的非4.0版本 gulp 请先卸载

```bash
npm uninstall gulp -g
```

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

> FEZ 构建工具会自动打开默认浏览器进入研发环境

## 待续...






