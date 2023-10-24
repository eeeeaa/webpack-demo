const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, { //get config from common + this one
    mode: 'production',
    devtool: 'source-map' //should not use inline-source-map, eval-source-map in production
});