const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

//separate common config, dev config , and prod config into separate files
module.exports = merge(common, { //get config from common + this one
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
});