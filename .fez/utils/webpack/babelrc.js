let babelrc = require('rc')('babel', {});
delete babelrc._;
delete babelrc.config;
delete babelrc.configs;

export default babelrc;
