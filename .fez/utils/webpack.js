/**
 * browserify 处理多文件
 * https://github.com/isaacs/node-glob
 */
import glob from 'glob';

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path';

import webpack from 'webpack';

/**
 * 引入 .fezconfig 配置
 */
import config from './fezconfig';

export default {
  dev(cb, reloadHandler) {
    let babelrc = require('rc')('babel', {});
    delete babelrc._;
    delete babelrc.config;
    delete babelrc.configs;

    const webpackConfig = {
      // context: './src',
      entry: {
        // 'index': './js/index.js',
        // 'lib/prism': './js/lib/prism.js'
      },
      output: {
        path: path.resolve(process.cwd(), config.paths.dev.appjs),
        filename: '[name].js'
      },
      resolve: {
        // extensions: [".js", ".json"],
        modules: [path.resolve(process.cwd(), "src/views"), "node_modules"]
      },
      module: {
        rules: [{
          test: /\.hbs$/,
          loader: "handlebars-loader"
        }],
        loaders: [{
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: babelrc
        }]
      },
      devtool: 'cheap-module-eval-source-map',
    };

    glob(config.paths.src.appJs, (err, files) => {

      files.map((file) => {
        console.log(file);
        const source_name = path.dirname(file).split(path.sep).pop();
        webpackConfig.entry[source_name] = file;
      });

      // webpackConfig.plugins = webpackConfig.plugins.concat(
      //     new webpack.DefinePlugin({
      //         "process.env": {
      //             "NODE_ENV": JSON.stringify("production")
      //         }
      //     }),
      //     new webpack.optimize.DedupePlugin(),
      //     new webpack.optimize.UglifyJsPlugin()
      // );

      webpack(webpackConfig, function(err, stats) {
        if (err) {
          console.log("[webpack:error]", err);
        }
        reloadHandler();
        cb();
      });
    });

  }
}
