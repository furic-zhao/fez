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
 * Nodejs处理文件
 * http://nodejs.cn/api/fs
 */
import fs from 'fs';

/**
 * 引入gulp
 * https://github.com/gulpjs/gulp
 */
import gulp from 'gulp';

/**
 * 引入 .fezrc 配置
 */
import config from './utils/fezrc';

export default () => {

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
            server: config.paths.dist.dir,
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
        }, config.browsersync.dist.options));
    }

    function gulpSeries() {
        const distDir = fs.existsSync(config.paths.dist.dir);

        if (distDir) {
            return gulp.series(
                startServer
            );
        } else {
            return gulp.series(
                'dist',
                startServer
            );
        }
    }

    /**
     * 启动本地服务 测试 dist 目录
     */
    gulp.task('view', gulp.series(
        gulpSeries()
    ));
}
