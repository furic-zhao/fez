/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ----------------------------------
 * 《玉龙雪山》
 * 于2014年10月 云南大理
 * -------------------
 * 玉峰皎洁峦碧翠
 * 龙跃起舞云霞蔚
 * 雪映秋色蓝月谷
 * 山环帅气向妩媚
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
