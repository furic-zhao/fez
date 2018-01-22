/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ----------------------------------
 * 《奇舞之歌》
 * 晴空万里，深远辽阔
 * 轻轻的风，淡淡的云
 * 翱翔的憧憬，激起我们内心的火热
 * 想唱就唱，想舞就舞
 * 美丽的景，美丽的梦
 * 绽放的青春，谱写绚丽的奇舞之歌
 * ================================== */

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log';

import writeFile from '../write';

export default (opts) => {
  const file = `
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
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log';

/**
 * 命令行颜色
 * https://github.com/doowb/ansi-colors
 */
import ansiColors from 'ansi-colors';

/**
 * 如果您的项目目录相对于fez工程目录层级太深
 * 请修改此数值
 */
let fezDeep = 3;

let shim = {};

const fez = (fezDirectory) => {
    if (--fezDeep < 0) {
        fancyLog(ansiColors.cyan("您的项目目录层级太深"));
        fancyLog(ansiColors.cyan("请修改 shim.js 文件中的 fezDeep 为更大的数值"));
        return;
    }

    fezDirectory = path.join('../', fezDirectory);

    if (fs.existsSync(fezDirectory)) {
        shim = require(\`\$\{fezDirectory\}/utils/shim\`);
    } else {
        fez(fezDirectory);
    }
}

fez('.fez');

module.exports = shim;
    `;
  writeFile({
    directory: `${opts.directory}`,
    fileName: 'shim.js',
    data: file,
    success() {
      fancyLog(`创建 ${opts.directory}/shim.js 成功`);
    },
    error() {
      fancyLog(`创建 ${opts.directory}/shim.js 失败`);
    }
  });
}
