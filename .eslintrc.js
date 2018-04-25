/**
 * ==================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ==================================
 */

/**
 * ---------------------------------
 * eslint配置文件，具体配置请参考：
 * https://eslint.org/docs/user-guide/configuring
 * *********************************
 * 每个项目中的.eslintrc.js将覆盖此文件的配置
 * ---------------------------------
 */

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    extends: [
        /**
         * FEZ默认使用standard编码规则
         * 规则内容请参考：https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md
         */
        'standard'
    ]
}
