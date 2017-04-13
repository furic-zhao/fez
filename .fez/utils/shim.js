let config = require('rc')('fez', {
    "browserify": {
        "shim": []
    }
});

let shim = {};

for (let v of config.browserify.shim) {
    shim[v.from] = {
        exports: `global:${v.import}`
    };
}


module.exports = shim;
