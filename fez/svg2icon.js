/* ==================================
 * @ 2017 FEZ 前端模块工程自动化构建工具
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * gulp插件的实用函数
 * https://github.com/gulpjs/gulp-util
 */
import gutil from 'gulp-util';

import iconfont from 'gulp-iconfont';
import iconfontCss from 'gulp-iconfont-css';

export default (gulp, config) => {

    function svg2icon() {
        let runTimestamp = Math.round(Date.now() / 1000);

        return gulp.src(`${config.svgIcons.src}**/*.svg`)
            .pipe(iconfontCss({
                fontName: config.svgIcons.fontName,
                path: `${config.svgIcons.src}templates/_icons.css`,
                targetPath: config.svgIcons.targetPath,
                fontPath: config.svgIcons.fontPath
            }))
            .pipe(iconfont({
                fontName: config.svgIcons.fontName,
                /**
                 * normalize和fontheight用于解决生成的图表变形问题，网上的土方法，但是好使
                 */
                // normalize: true,
                // fontHeight:1001,
                // fixedWidth: true,
                // centerHorizontally: true,
                prependUnicode: true,
                formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
                timestamp: runTimestamp,
            }))
            .on('glyphs', (glyphs, options) => {
                // CSS templating, e.g.
                gutil.log(glyphs, options);
            })
            .pipe(gulp.dest(config.svgIcons.dist));
    }

    /******************
     * SVG 转换 字体文件
     ******************/
    gulp.task('svg2icon', gulp.series(
        svg2icon
    ));
};
