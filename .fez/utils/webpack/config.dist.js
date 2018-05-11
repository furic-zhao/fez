/**
 * 引入webpack
 */
import webpack from 'webpack'

/**
 * nodejs中的路径处理模块
 * http://javascript.ruanyifeng.com/nodejs/path.html
 */
import path from 'path'

/**
 * css压缩
 */
import OptimizeCSSPlugin from 'optimize-css-assets-webpack-plugin'

/**
 * 输出路径
 */
import outputPath from './output-path'

/**
 * 引入 fez.config.js 配置
 */
import config from '../fezconfig'

export default {
  mode: 'production',
  output: {
    path: outputPath.dist()
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'fez-preprocess-loader',
        options: {
          available: !config.useMock.dist
        }
      }]
    }]
  },
  optimization: {
    runtimeChunk: {
      name: path.join(outputPath.js(), 'manifest')
    },
    splitChunks: {
      chunks: "async", // initial/初始chunks,async/按需加载chunks,all/所有chunks
      minSize: 30000, //（默认值：30000）chunk 的最小尺寸
      minChunks: 1, //（默认值：1）引用同一模块的最小 chunk 数
      maxAsyncRequests: 5, //（默认值：3）入口页面的最大并行请求数
      maxInitialRequests: 3, //（默认值：5）按需加载模块的最大并行请求数
      name: true,
      cacheGroups: {
        default: false,
        vendors: false,
        /**
         * 提取公共vendor脚本
         */
        'vendor-webpack': {
          name: path.join(outputPath.js(), 'vendor-webpack'),
          chunks: 'all',
          minChunks: 2,
          test: /node_modules\/(.*)\.js$/,
          priority: -20
        },
        /**
         * 提取公共common脚本
         */
        'common-webpack': {
          name: path.join(outputPath.js(), 'common-webpack'),
          chunks: 'all',
          minChunks: 2,
          test: /src\/views\/(.*)\.js$/,
          priority: -19,
          // reuseExistingChunk: true
        },
        /**
         * 提取公共vendor样式
         */
        'vendor-webpack-css': {
          name: path.join(outputPath.js(), 'vendor-webpack-css'),
          test: /node_modules\/(.*)\.(sass|scss|less|styl|css)$/,
          chunks: 'all',
          minChunks: 2,
          enforce: true,
          priority: -18
        },
        /**
         * 提取公共common样式
         */
        'common-webpack-css': {
          name: path.join(outputPath.js(), 'common-webpack-css'),
          test: /src\/(.*)\.(sass|scss|less|styl|css)$/,
          chunks: 'all',
          minChunks: 2,
          enforce: true,
          priority: -17
        }
      }
    }
  },
  plugins: [
    //压缩css
    new OptimizeCSSPlugin({
      cssProcessorOptions: { safe: true }
    }),
    // 根据模块的相对路径生成一个四位数的hash作为模块id
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]
}
