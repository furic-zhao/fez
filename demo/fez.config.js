export default {
    /* ==================================
     * @ 2017 FEZ 前端模块工程自动化构建工具
     * https://github.com/furic-zhao/fez
     * ================================== */

    browserify: {
        shim: [{
            import: "$",
            from: "jquery"
        }, {
            import: "Q",
            from: "q"
        }]
    },
    useInject: {
        bower: {
            available: true,
            js: [{
                target: "a-vendor-jquery-bootstrap.js",
                contain: ["**/jquery.js", "**/bootstrap.js"]
            }],
            css: [{
                target: "vendor-bootstrap-fontawesome.css",
                contain: ["**/bootstrap.css", "**/font-awesome.css"]
            }]
        },
        lib: {
            available: true,
            css: "*common*",
            js: []
        },
        views: true
    },
    svgSymbol: {
        available: true,
        autoInject: true
    }
}
