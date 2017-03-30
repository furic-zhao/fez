let frames = [{
    title: "Nodejs",
    desc: "FEZ 构建在 NodeJS 基于 Chrome V8 引擎的 JavaScript 运行环境，其事件驱动非阻塞的特性，极其快速的编译前端各种资源",
    content: `<div id="home-intro">

        <p>Node.js® is a JavaScript runtime built on <a href="https://developers.google.com/v8/">Chrome's V8 JavaScript engine</a>.
Node.js uses an event-driven, non-blocking I/O model that makes it
lightweight and efficient. Node.js' package ecosystem, <a href="https://www.npmjs.com/">npm</a>, is the largest ecosystem of open
source libraries in the world.</p>



        <h2 id="home-downloadhead" data-dl-local="Download for">Download for macOS (x64)</h2>

        <div class="home-downloadblock">

          <a href="https://nodejs.org/dist/v6.10.0/node-v6.10.0.pkg" class="home-downloadbutton" title="Download v6.10.0 LTS" data-version="v6.10.0">
            v6.10.0 LTS
            <small>Recommended For Most Users</small>
          </a>

          <ul class="list-divider-pipe home-secondary-links">
            <li>
              <a href="https://nodejs.org/en/download/">Other Downloads</a>
            </li>
            <li>
              <a href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V6.md#6.10.0">Changelog</a>
            </li>
            <li>
              <a href="https://nodejs.org/dist/latest-v6.x/docs/api/">API Docs</a>
            </li>
          </ul>

        </div>

          <div class="home-downloadblock">

            <a href="https://nodejs.org/dist/v7.7.1/node-v7.7.1.pkg" class="home-downloadbutton" title="Download v7.7.1 Current" data-version="v7.7.1">
              v7.7.1 Current
              <small>Latest Features</small>
            </a>

            <ul class="list-divider-pipe home-secondary-links">
              <li>
                <a href="https://nodejs.org/en/download/current/">Other Downloads</a>
              </li>
              <li>
                <a href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V7.md#7.7.1">Changelog</a>
              </li>
              <li>
                <a href="https://nodejs.org/dist/latest-v7.x/docs/api/">API Docs</a>
              </li>
            </ul>

          </div>
        <p>
          Or have a look at the <a href="https://github.com/nodejs/LTS#lts-schedule">LTS schedule.</a>
        </p>
      </div>`,
    viewMore: {
        text: "更多信息",
        href: "https://nodejs.org/"
    }
}, {
    title: "NPM",
    desc: "FEZ 使用 NPM 接入全球最大的开源生态系统，具备无限的功能扩展能力，可整合国际前沿的开源框架，适应瞬息万变的技术更替",
    content: `<h1 class="title em-default type-neutral-11">
          Build amazing things
        </h1>
        <p class="h5 em-default type-neutral-11 pbxl">
          npm is the package manager for JavaScript. Find, share, and reuse
          packages of code from hundreds of thousands of developers — and
          assemble them in powerful new ways.
        </p>
        <a id="main-cta" href="#pane-homepage-pricing" class="btn btn-highlight-3 mrl" data-event-name="homepage-hero-cta">Get started</a>`,
    viewMore: {
        text: "更多信息",
        href: "https://www.npmjs.com/"
    }
}, {
    title: "Gulp",
    desc: "FEZ 整合Gulp的众多插件，编译、优化和组织前端复杂的模块及静态资源，喝着可乐儿、哼着小曲儿，自动化完成前端大量重复工作",
    content: `<h1 class="heading text-center">Automate and enhance your workflow</h1><h2 class="paragraph">
          gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.
        </h2><div class="ctas">
          <a class="ctas-button" href="https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md">Get Started</a>
        </div>`,
    viewMore: {
        text: "更多信息",
        href: "http://gulpjs.com/"
    }
}, {
    title: "Browserify",
    desc: "FEZ 使用 Browserify 模块化组织和管理项目的各个功能模块，极大提升项目的可维护性、功能复用性，并实现积木式的搭建网页",
    content: `<section id="top-home-section" class="top-section color-a">
      <div id="top-home-image"></div>

       <h3 id="top-subtitle" class="large-font">Browserify lets you require(<span class="color-d">'modules'</span>) in the browser by bundling up all of your dependencies.</h3>
      <a href="https://github.com/substack/node-browserify#usage">
        <button class="top-button" id="top-button2">
          Documentation
        </button>
      </a>
    </section>`,
    viewMore: {
        text: "更多信息",
        href: "http://browserify.org/"
    }
}, {
    title: "Bower",
    desc: "FEZ 可配置使用 Bower 搜索、安装、更新和卸载如JavaScript、CSS之类的网络资源，通过自动化注入技术完美解决复杂的框架包管理问题",
    content: `<div class="main">
<p class="lead">Web sites are made of lots of things — frameworks, libraries, assets, and utilities. Bower manages all these things for you.</p>
<p>Keeping track of all these packages and making sure they are up to date (or set to the specific versions you need) is tricky. Bower to the rescue!</p>
<p>Bower can manage components that contain HTML, CSS, JavaScript, fonts or even image files. Bower doesn’t concatenate or minify code or do anything else - it just installs the right versions of the packages you need and their dependencies.</p>
<p>To <a href="#getting-started">get started</a>, Bower works by fetching and installing <a href="/search">packages</a> from all over, taking care of hunting, finding, downloading, and saving the stuff you’re looking for. Bower keeps track of these packages in a manifest file, <a href="/docs/creating-packages/#bowerjson"><code class="highlighter-rouge">bower.json</code></a>. How you use <a href="/search">packages</a> is up to you. Bower provides hooks to facilitate using packages in your <a href="/docs/tools">tools and workflows</a>.</p>
<p>Bower is optimized for the front-end. If multiple packages depend on a package - jQuery for example - Bower will download jQuery just once. This is known as a flat dependency graph and it helps reduce page load.</p>
<h2 id="install-bower"><a href="#install-bower" class="header-anchor">§</a>Install Bower</h2>
<p>Bower is a command line utility. Install it with npm.</p>
<figure class="highlight"><pre><code class="language-bash" data-lang="bash"><span class="gp">$ </span>npm install -g bower</code></pre></figure>
<p>Bower requires <a href="http://nodejs.org/">node, npm</a> and <a href="http://git-scm.org">git</a>.</p>
<p>Latest release: <a href=""><img src="https://img.shields.io/npm/v/bower.svg?maxAge=2592000" alt="bower version"></a></p>
<p>For troubleshooting installation on different platforms, read the <a href="https://github.com/bower/bower/wiki/Troubleshooting">troubleshooting</a> wiki page.</p>
<h2 id="getting-started"><a href="#getting-started" class="header-anchor">§</a>Getting started</h2>
<h3 id="install-packages"><a href="#install-packages" class="header-anchor">§</a>Install packages</h3>
<p>Install packages with <a href="/docs/api#install"><code class="highlighter-rouge">bower install</code></a>. Bower installs packages to <code class="highlighter-rouge">bower_components/</code>.</p>
<figure class="highlight"><pre><code class="language-bash" data-lang="bash"><span class="gp">$ </span>bower install &lt;package&gt;</code></pre></figure>
<p>A package can be a GitHub shorthand, a Git endpoint, a URL, and more. Read more about <a href="/docs/api/#install"><code class="highlighter-rouge">bower install</code></a>.</p>
<figure class="highlight"><pre><code class="language-bash" data-lang="bash"><span class="c"># installs the project dependencies listed in bower.json</span>
<span class="gp">$ </span>bower install
<span class="c"># registered package</span>
<span class="gp">$ </span>bower install jquery
<span class="c"># GitHub shorthand</span>
<span class="gp">$ </span>bower install desandro/masonry
<span class="c"># Git endpoint</span>
<span class="gp">$ </span>bower install git://github.com/user/package.git
<span class="c"># URL</span>
<span class="gp">$ </span>bower install http://example.com/script.js</code></pre></figure>
<h3 id="search-packages"><a href="#search-packages" class="header-anchor">§</a>Search packages</h3>
<p><a href="/search">Search Bower packages</a> and find the registered package names for your favorite projects.</p>
<h3 id="save-packages"><a href="#save-packages" class="header-anchor">§</a>Save packages</h3>
<p>Create a <code class="highlighter-rouge">bower.json</code> file for your package with <a href="/docs/creating-packages/#bowerjson"><code class="highlighter-rouge">bower init</code></a>.</p>
<p>Then save new dependencies to your <code class="highlighter-rouge">bower.json</code> with <code class="highlighter-rouge">bower install PACKAGE --save</code></p>
<h3 id="use-packages"><a href="#use-packages" class="header-anchor">§</a>Use packages</h3>
<p>How you use packages is up to you. We recommend you use Bower together with <a href="/docs/tools/">Grunt, RequireJS, Yeoman, and lots of other tools</a> or build your own workflow with <a href="/docs/api/">the API</a>. You can also use the installed packages directly, like this, in the case of <code class="highlighter-rouge">jquery</code>:</p>
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"bower_components/jquery/dist/jquery.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span></code></pre></figure>
<h2 id="twitter-updates-from-bowerhttpstwittercombower"><a href="#twitter-updates-from-bowerhttpstwittercombower" class="header-anchor">§</a>Twitter updates from <a href="https://twitter.com/bower">@bower</a></h2>
<p><a class="twitter-timeline" href="https://twitter.com/bower" data-widget-id="480377291369754625">Tweets by @bower</a>
</p>

</div>`,
    viewMore: {
        text: "更多信息",
        href: "https://bower.io/"
    }
}, {
    title: "BorwserSync",
    desc: "FEZ 使用 Browsersync 让浏览器实时快速的响应前端各种文件的更改并自动刷新页面，亦可实时同步各个终端，提高至少30%的开发效率",
    content: `<h1 class="hook">Time-saving synchronised browser testing.</h1><p class="ronseal">It’s wicked-fast and totally free.</p><p class="video"><a class="video__link" href="#"></a></p><p class="how-to"></p><p class="how-to__command">npm install -g browser-sync</p><p class="cta"><a class="button button--primary" href="#install" title="Get Started">Get Started</a></p><div class="player"><p>'bonjour</p></div>`,
    viewMore: {
        text: "更多信息",
        href: "https://browsersync.io/"
    }
}]

let index = {
    fezdesc: "FEZ 前端模块化工程开发框架",
    jumbotron: {
        title: "Hello FEZ And Framework7!",
        content: "这是一个使用 FEZ 搭建的用于开发混合移动应用或 iOS 和 Android 风格的WEB APP的示例。演示了基于 Framework7 结合 Vue 构建高性能单页面移动应用。",
        button: {
            name: `<i class="fa fa-github-alt"></i> GitHub`,
            href: "https://github.com/furic-zhao/fez"
        }
    }
}

let list = {
    jumbotron: {
        title: "FEZ Frame!",
        content: "这是一个列表展示页，请点击下面列表项目进入详情页浏览",
        button: {
            name: "查看更多信息",
            href: "http://fez.hestudy.com"
        }
    }
}

let common = {
    siteName: "FEZ Framework7 Demo",

    nav: [{
        name: "FEZ基本架构",
        href: "/listing/"
    }, {
        name: "表单示例",
        href: "/form/"
    }, {
        name: "REST风格的动态路由",
        href: "/dynamic-route/blog/45/post/125/?foo=bar#about"
    }, {
        name: "关于FEZ",
        href: "/about/"
    }],
    tips: "本示例为移动端集成了REM解决方案，可以试着横屏、或在更大的移动端屏幕浏览，页面中的所有元素在不同的屏幕中会等比缩放。",
    footerText: "© 2017 FEZ 前端模块化工程开发框架 Created by Furic.zhao"
}

export default {
    "index": index,
    "list": list,
    "frames": frames,
    "common": common
}
