/**
 * =================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * =================================
 */

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
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

/**
 * webpack美化错误信息提示
 */
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'

/**
 * 基于node的桌面通知中心
 */
import notifier from 'node-notifier'

/**
 * https://vue-loader.vuejs.org/guide/#manual-configuration
 */
import VueLoaderPlugin from 'vue-loader/lib/plugin'

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

const eslintLoader = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  exclude: /node_modules/,
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: true
  }
})

const webpackConfig = {
  output: {
    filename: '[name].js'
  },
  entry: {},
  resolve: {
    modules: [path.join(process.cwd(), "src"), "node_modules"]
  },
  module: {
    rules: [
      ...(config.eslint.available ? [eslintLoader()] : []),
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: babelrc
        }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: vueLoaderConfig(extractVue)
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
          outputPath: outputPath.images()
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
          outputPath: outputPath.media()
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
          outputPath: outputPath.fonts()
        }
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          ...(isProduction ? [MiniCssExtractPlugin.loader] : [{ loader: 'style-loader' }]),
          {
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
            loader: `sass-loader`,
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          ...(isProduction ? [MiniCssExtractPlugin.loader] : [{ loader: 'style-loader' }]),
          {
            loader: 'css-loader',
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
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          ...(isProduction ? [MiniCssExtractPlugin.loader] : [{ loader: 'style-loader' }]),
          {
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
            loader: `stylus-loader`,
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          ...(isProduction ? [MiniCssExtractPlugin.loader] : [{ loader: 'style-loader' }]),
          {
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
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    /**
     * 提取JS中引入的样式
     * 提取后的文件将会被保存在dist/static/js/目录
     */
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css"
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [],
      },
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: `${config.projectName} 编译出错`,
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
          icon: path.join(__dirname, '../', 'fezlogo.png')
        });
      }
    })
  ]
}

export default webpackConfig
