/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

export default {
  webpack: {
    config: {
      module: {
        rules: [{
          test: require.resolve('jquery'),
          use: [{
            loader: 'expose-loader',
            options: 'jQuery'
          }, {
            loader: 'expose-loader',
            options: '$'
          }]
        }]
      }
    }
  }
}
