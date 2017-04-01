/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * md5加密模块
 * https://github.com/jtblin/crypto-md5
 */
import md5 from 'crypto-md5';
/**
 * 深度遍历目录/列出目录下所有文件
 * https://www.npmjs.com/package/rd
 */
import rd from 'rd';

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
 * 具有一致接口、模块化、高性能等特性的 JavaScript 扩展工具库
 * https://lodash.com/
 */
import _ from 'lodash';

/**
 * gulp插件的实用函数
 * https://github.com/gulpjs/gulp-util
 */
import gutil from 'gulp-util';

export default (gulp, config, cb, delTmp) => {

    function changed(dir) {
        const manifestPath = path.resolve(`${config.paths.src.dir}/manifest.json`);

        let manifest = {};

        let originManifest = {};

        let diff = {};

        //如果存在 manifest.json, 则加载保存
        if (fs.existsSync(manifestPath)) originManifest = require(manifestPath);

        //遍历目录, 根据内容 md5 加密
        rd.eachFileFilterSync(dir, (file) => {
            const index = path.relative(dir, file);

            //过滤掉 隐藏文件 和 manifest.json
            if (path.extname(file) && index !== 'manifest.json' && fs.existsSync(file)) {

                let data = fs.readFileSync(file);

                if (data) {
                    manifest[index] = md5(data, 'hex');
                }
            }

        });

        //将新的 manifest.json 保存
        fs.writeFile(manifestPath, JSON.stringify(manifest), (err) => {
            if (err) throw err;
        });

        //找出有变动的文件
        if (originManifest) {

            _.forEach(manifest, (item, index) => {
                if (originManifest[index] !== item) {
                    diff[index] = item;
                }
            });
        }

        return diff;
    }

    const diff = changed(config.paths.tmp.dir);

    let tmpSrc = [];

    if (!_.isEmpty(diff)) {

        _.forEach(diff, (item, index) => {
            console.log(item, index);
            tmpSrc.push(`${config.paths.tmp.dir}/${index}`);

            gutil.log(`已改动 ${gutil.colors.yellow(index)}`);
        });

    } else {
        gutil.log(gutil.colors.yellow('没有文件发生改动!'));
        delTmp();
        cb();
    }
}
