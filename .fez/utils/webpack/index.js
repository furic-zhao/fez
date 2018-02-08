/**
 * 处理多文件
 * https://github.com/isaacs/node-glob
 */
import glob from 'glob';

/**
 * 命令行日志
 * https://www.npmjs.com/package/fancy-log
 */
import fancyLog from 'fancy-log';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path';

/**
 * 引入webpack
 */
import webpack from 'webpack';

import merge from 'webpack-merge';

/**
 * 引入 .fezconfig 配置
 */
import config from '../fezconfig';

function pathJs(name) {
  return path.join('static/js', name);
}

let commonChunk = [{
  target: 'common-jquery',
  contain: ['jquery']
}, {
  target: 'common-axios-vue',
  contain: ['axios','vue']
}];

export default {
  dev(cb, reloadHandler) {
    process.env.NODE_ENV = 'development';

    let webpackConfig = merge(config.webpack.config, require('./base.conf').default, {
      output: {
        path: path.resolve(process.cwd(), config.paths.dev.dir)
      },
      devtool: 'cheap-module-eval-source-map'
    });

    glob(config.paths.src.appJs, (error, files) => {

      files.map((file) => {
        const source_name = path.dirname(file).split(path.sep).pop();
        webpackConfig.entry[pathJs(source_name)] = file;
      });

      // console.log(JSON.stringify(webpackConfig));
      webpack(webpackConfig, function(err, stats) {
        //致命的 wepback 错误（配置出错等）
        if (err) {
          if (err.details) {
            fancyLog.error(err.details);
          }
          return;
        }

        //编译错误（缺失的 module，语法错误等）
        const info = stats.toJson();
        if (stats.hasErrors()) {
          fancyLog.error(info.errors);
        }

        //编译告警
        if (stats.hasWarnings()) {
          fancyLog.warn(info.warnings);
        }

        reloadHandler();

        cb();
      });
    });
  },
  dist(cb) {
    process.env.NODE_ENV = 'production';

    let webpackConfig = merge(config.webpack.config, require('./base.conf').default, {
      output: {
        path: path.resolve(process.cwd(), config.paths.tmp.dir)
      }
    });

    glob(config.paths.src.appJs, (error, files) => {

      let appChunks = [];

      files.map((file) => {
        const source_name = path.dirname(file).split(path.sep).pop();
        webpackConfig.entry[pathJs(source_name)] = file;

        appChunks.push(pathJs(source_name));
      });

      //提取合并公共脚本
      for (let item of commonChunk) {
        webpackConfig.entry[pathJs(item.target)] = item.contain;
        webpackConfig.plugins = webpackConfig.plugins.concat(
          new webpack.optimize.CommonsChunkPlugin({
            name: pathJs(item.target),
            chunks: [...appChunks, ...[pathJs(item.target)]],
          })
        );
      }

      //生成manifest
      webpackConfig.plugins = webpackConfig.plugins.concat(
        new webpack.optimize.CommonsChunkPlugin({
          name: pathJs('manifest'),
          minChunks: Infinity
        })
      );

      // console.log(JSON.stringify(webpackConfig));
      webpack(webpackConfig, function(err, stats) {
        //致命的 wepback 错误（配置出错等）
        if (err) {
          if (err.details) {
            fancyLog.error(err.details);
          }
          return;
        }

        //编译错误（缺失的 module，语法错误等）
        const info = stats.toJson();
        if (stats.hasErrors()) {
          fancyLog.error(info.errors);
        }

        //编译告警
        if (stats.hasWarnings()) {
          fancyLog.warn(info.warnings);
        }

        cb();
      });
    });
  }
}
