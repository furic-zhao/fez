/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

import common from './common';
/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs';

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path';

/**
 * 获取本地IP地址
 * https://github.com/aloksguha/myip
 */
import localIp from 'quick-local-ip';

export default (config, cb) => {
    let htmlPages = []; //所有html页面

    let devPathLen = config.paths.dev.html.length; //研发目录路径字符长度

    let ip = localIp.getLocalIP4();

    /**
     * 遍历目录所有文件
     * http://nodejs.cn/api/fs.html#fs_fs_readdirsync_path_options
     */
    function dirAllFiles(dir) {
        let collector = {
            'name': dir,
            'type': 'dir',
            'url': '',
            'child': []
        };

        let files = fs.readdirSync(dir); //

        files.forEach((file) => {
            let absolutePath = dir + '/' + file; //文件绝对地址

            /**
             * 返回一个stats 实例
             * http://nodejs.cn/api/fs.html#fs_class_fs_stats
             */
            let stats = fs.statSync(absolutePath);

            let url = absolutePath.substring(devPathLen + 1); //截取开发目录路径

            if (stats.isDirectory() && (stats.isDirectory() !== '.' || stats.isDirectory() !== '..')) {
                //如果是目录 继续遍历
                collector['child'].push(dirAllFiles(absolutePath));
            } else {
                collector['child'].push({
                    'name': path.basename(absolutePath),
                    'type': 'file',
                    'url': url
                });
            }
        });
        return collector;
    }

    /**
     * 遍历出所有的html文件
     */
    function showdir(collector, level) {
        let file = collector['name'];
        let basename = path.basename(file);

        if (collector['type'] == 'dir') {
            collector['child'].forEach((item) => {
                showdir(item, level + 1);
            });
        }

        if (collector['type'] == 'file') {
            if (path.extname(file) === '.html' && basename !== 'zindex.html') {
                let pageItem = {};
                pageItem.name = collector['name'];
                pageItem.url = collector['url'];
                htmlPages.push(pageItem);

            }
        }
    }

    showdir(dirAllFiles(config.paths.dev.html), 0);

    let zindexHtml = `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <meta name="apple-mobile-web-app-capable" content="no" />
    <meta name="format-detection" content="telephone=no">
    <title>${config.projectName} 项目页面列表</title>
    <link rel="stylesheet" href="./zindex/css/bootstrap.min.css">
    <style>
    .marketing {
        text-align: center;
    }
    .qrcode-img{
        margin: 20px 0;
    }
    .qrcode-img canvas,
    .qrcode-img img {
        margin: 0 auto;
    }
    </style>
</head>

<body>
    <div class="jumbotron">
        <div class="container">
            <h2>FEZ ${config.projectName} 项目页面</h2>
            <p>
                点击按钮链接浏览项目页面，也可以扫描二维码在移动端同步开发和测试页面。
            </p>
            <p>
                <a class="btn btn-primary btn-lg" href="https://github.com/furic-zhao/fez" target="_blank" role="button">FEZ Github项目</a>
            </p>
        </div>
    </div>
    <div class="container marketing">
        <!-- Three columns of text below the carousel -->
        <div class="row" id="js-qrcode">
        </div>
        <!-- /.row -->
        <!-- FOOTER -->
        <hr>
        <footer>
            <p>© 2017 FEZ 前端模块化工程开发框架</p>
        </footer>
    </div>
</body>
<script id="qrcode-template" type="text/x-handlebars-template">
    {{#each this}}
    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <div class="qrcode-img" data-href="{{url}}"></div>
        <p><a class="btn btn-default" href="{{url}}" target="_blank">{{name}}</a></p>
    </div>
    {{/each}}
</script>
<script src="./zindex/js/jquery-2.1.3.min.js"></script>
<script src="./zindex/js/qrcode.min.js"></script>
<script src="./zindex/js/handlebars-v4.0.5.min.js"></script>
<script>
(function() {
    var sourceJson = ${JSON.stringify(htmlPages)};
    var sourceTemp = $("#qrcode-template").html();
    var compileTemplate = Handlebars.compile(sourceTemp);
    var qrcodeHtml = compileTemplate(sourceJson);
    $("#js-qrcode").html(qrcodeHtml);

    $(".qrcode-img").each(function() {
        new QRCode($(this)[0], {
            text: window.location.protocol + "//${ip}" + (window.location.port ? ':' + window.location.port : '') + "/" + $(this).data("href"),
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    });
})();
</script>

</html>
`;

    let out = fs.createWriteStream(config.paths.dev.html + '/zindex.html', {
        encoding: "utf8"
    });
    out.write(zindexHtml, (err) => {
        if (err) console.log(err);
    });
    out.end();

    // 复制目录
    common.exists('../.fez/utils/zindex', config.paths.dev.html + '/zindex', common.copy);
    cb();
}
