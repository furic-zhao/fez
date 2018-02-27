/* ==================================
 * @ 2017 FEZ 前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

/**
 * Nodejs处理路径
 * http://nodejs.cn/api/path.html
 */
import path from 'path'

/**
 * 引入webpack
 */
import webpack from 'webpack'

/**
 * 提取样式
 */
import ExtractTextPlugin from 'extract-text-webpack-plugin'

/**
 * babel配置
 */
import babelrc from './babelrc'

/**
 * vue-loader配置
 */
import vueLoaderConfig from './vue-loader.conf'

/**
 * 引入 fez.config.js 配置
 */
import config from '../fezconfig'

/**
 * webpack公共工具类
 */
import outputPath from './output-path'


//是否是生产环境
const isProduction = process.env.NODE_ENV === 'production'

let stripMock = true;
if (!isProduction && config.useMock.dev) {
  stripMock = false;
} else if (isProduction && config.useMock.dist) {
  stripMock = false;
}

const extractCss = new ExtractTextPlugin({
  filename: (getPath) => {
    return getPath('[name]-common-css.css').replace('static/js/', 'static/css/')
  },
  disable: !isProduction
})

const extractSass = new ExtractTextPlugin({
  filename: (getPath) => {
    return getPath('[name]-common-sass.css').replace('static/js/', 'static/css/')
  },
  disable: !isProduction
})

const extractLess = new ExtractTextPlugin({
  filename: (getPath) => {
    return getPath('[name]-common-less.css').replace('static/js/', 'static/css/')
  },
  disable: !isProduction
})

const extractStylus = new ExtractTextPlugin({
  filename: (getPath) => {
    return getPath('[name]-common-stylus.css').replace('static/js/', 'static/css/')
  },
  disable: !isProduction
})

const extractVue = new ExtractTextPlugin({
  filename: (getPath) => {
    return getPath('[name]-common-vue.css').replace('static/js/', 'static/css/')
  },
  disable: !isProduction
  // Setting the following option to `false` will not extract CSS from codesplit chunks.
  // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
  // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
  // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
  // allChunks: true,
})


export default {
  // context: './src',
  watch: !isProduction,

  output: {
    filename: '[name].js'
  },

  entry: {},

  resolve: {
    modules: [path.join(process.cwd(), "src"), "node_modules"]
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: babelrc
      }, {
        loader: 'fez-preprocess-loader',
        options: {
          available: stripMock
        }
      }]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig(extractVue)
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: '[name].[ext]',
        outputPath: outputPath.images()
      }
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: '[name].[ext]',
        outputPath: outputPath.media()
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: '[name].[ext]',
        outputPath: outputPath.fonts()
      }
    }, {
      test: /\.hbs$/,
      loader: 'handlebars-loader'
    }, {
      test: /\.css$/,
      use: extractCss.extract({
        use: [{
          loader: "css-loader",
          options: {
            url: !isProduction,
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: path.join(__dirname, './postcss.config.js')
            }
          }
        }],
        // 在开发环境使用 style-loader
        fallback: "style-loader"
      })
    }, {
      test: /\.(scss|sass)$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader",
          options: {
            url: !isProduction,
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: path.join(__dirname, './postcss.config.js')
            }
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }],
        // 在开发环境使用 style-loader
        fallback: "style-loader"
      })
    }, {
      test: /\.less$/,
      use: extractLess.extract({
        use: [{
          loader: "css-loader",
          options: {
            url: !isProduction,
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: path.join(__dirname, './postcss.config.js')
            }
          }
        }, {
          loader: "less-loader",
          options: {
            sourceMap: true
          }
        }],
        // 在开发环境使用 style-loader
        fallback: "style-loader"
      })
    }, {
      test: /\.styl$/,
      use: extractStylus.extract({
        use: [{
          loader: "css-loader",
          options: {
            url: !isProduction,
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: path.join(__dirname, './postcss.config.js')
            }
          }
        }, {
          loader: "stylus-loader",
          options: {
            sourceMap: true
          }
        }],
        // 在开发环境使用 style-loader
        fallback: "style-loader"
      })
    }]
  },

  plugins: [
    extractCss,
    extractSass,
    extractLess,
    extractStylus,
    extractVue,
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}
