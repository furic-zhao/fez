/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

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
 * gulp插件的实用函数
 * https://github.com/gulpjs/gulp-util
 */
import gutil from 'gulp-util';

/**
 * 如果您的项目目录相对于fez工程目录层级太深
 * 请修改此数值
 */
let fezDeep = 3;

const fez = (fezDirectory) => {
    if (--fezDeep < 0) {
        gutil.log(gutil.colors.cyan("您的项目目录层级太深"));
        gutil.log(gutil.colors.cyan("请修改 gulpfile 文件中的 fezDeep 为更大的数值"));
        return;
    }

    fezDirectory = path.join('../', fezDirectory);

    if (fs.existsSync(fezDirectory)) {
        require(fezDirectory).default();
    } else {
        fez(fezDirectory);
    }
}

fez('.fez');
