/**
 * 引入webpack
 */
import webpack from 'webpack'

/**
 * 输出路径
 */
import outputPath from './output-path'

/**
 * 引入 fez.config.js 配置
 */
import config from '../fezconfig'

export default {
  watch: true, //研发模式开启监听
  mode: 'development',
  output: {
    path: outputPath.dev()
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'fez-preprocess-loader',
        options: {
          available: !config.useMock.dev
        }
      }]
    }]
  },
  devtool: 'cheap-module-eval-source-map'
}
