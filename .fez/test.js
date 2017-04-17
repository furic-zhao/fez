/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * 多终端测试
 * https://browsersync.io/docs/gulp
 */
import bs from 'browser-sync';
bs.create();

/**
 * 引入开发环境生成二维码页面模块
 */
import qrCode from './utils/zindex';

/**
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs';

/**
 * 用于删除文件或目录
 * https://github.com/sindresorhus/del
 */
import del from 'del';

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp';

/**
 * 引入 .fezconfig 配置
 */
import config from './utils/fezconfig';

export default () => {


    /**
     * 清除 test 目录
     **/
    function delTest(cb) {
        del([config.paths.test.dir]).then(() => {
            cb();
        });
    }

    /**
     * 测试环境生成二维码方便在移动端浏览测试
     */
    function qrcodeViewHtml(cb) {
        if (config.useQrCodeHtml) {
            qrCode(cb, config.paths.test.html);
        } else {
            cb();
        }
    }

    /**
     * 拷贝 dist 目录下所有文件到测试目录
     */
    function copyDistToTest(cb) {

        return gulp.src(`${config.paths.dist.dir}/**/*`, {
                base: config.paths.dist.dir
            })
            .pipe(gulp.dest(config.paths.test.dir));
    }

    /**
     * 启动 browsersync
     * 配置参考：http://www.browsersync.cn/docs/options/
     */
    function startServer() {
        bs.init(Object.assign({
            //在Chrome浏览器中打开网站
            // open: "external",
            // browser: "google chrome",
            socket: {
                namespace: '/fez'
            },
            server: config.paths.test.dir,
            ui: {
                port: 3030
            },
            port: 9090,
            startPath: '/',
            notify: { //自定制livereload 提醒条
                styles: [
                    "margin: 0",
                    "padding: 5px 10px",
                    "position: fixed",
                    "font-size: 14px",
                    "z-index: 9999",
                    "bottom: 0px",
                    "right: 0px",
                    "border-radius: 0",
                    "border-top-left-radius: 8px",
                    "background-color: rgba(0,0,0,0.5)",
                    "color: white",
                    "text-align: center"
                ]
            }
        }, config.browsersync.test.options));
    }

    function gulpSeries() {
        const distDir = fs.existsSync(config.paths.dist.dir);

        if (distDir) {
            return gulp.series(
                delTest,
                copyDistToTest,
                qrcodeViewHtml,
                startServer
            );
        } else {
            return gulp.series(
                'dist',
                delTest,
                copyDistToTest,
                qrcodeViewHtml,
                startServer
            );
        }
    }

    /**
     * 启动本地服务 测试 dist 目录
     */
    gulp.task('test', gulp.series(
        gulpSeries()
    ));
}
