/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path';

/**
 * babel配置
 */
import babelrc from './babelrc';

/**
 * 引入webpack
 */
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

/**
 * vue-loader配置
 */
import vueLoaderConfig from './vue-loader.conf';

/**
 * 引入 .fezconfig 配置
 */
import config from '../fezconfig';

//是否是生产环境
const isProduction = process.env.NODE_ENV === 'production';

export default {
  // context: './src',
  watch: !isProduction,
  output: {
    filename: '[name].js'
  },
  entry: {},
  resolve: {
    modules: [path.resolve(process.cwd(), "src"), "node_modules"]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: babelrc
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: isProduction ? '[name]-js-[sha512:hash:base64:10].[ext]' : '[name].[ext]',
        outputPath: 'static/images/'
      }
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: isProduction ? '[name]-js-[sha512:hash:base64:10].[ext]' : '[name].[ext]',
        outputPath: 'static/images/'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: isProduction ? '[name]-js-[sha512:hash:base64:10].[ext]' : '[name].[ext]',
        outputPath: 'static/images/'
      }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        // 在开发环境使用 style-loader
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    // new ExtractTextPlugin({
    //   filename: path.resolve(process.cwd(), config.paths.tmp.css, 'common-js-[name].css'),
    //   // Setting the following option to `false` will not extract CSS from codesplit chunks.
    //   // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
    //   // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
    //   // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
    //   allChunks: true,
    //   disable: process.env.NODE_ENV === "development"
    // }),
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('[name]-common.css').replace('static/js', 'static/css');
      },
      disable: process.env.NODE_ENV === "development"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}
