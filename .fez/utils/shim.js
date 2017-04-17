/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * 引入 .fezconfig 配置
 */
import config from './fezconfig';

const shim = {};

for (let v of config.browserify.shim) {
    shim[v.from] = {
        exports: `global:${v.import}`
    };
}

module.exports = shim;
