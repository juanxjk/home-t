const merge = require('webpack-merge');

const publicPath = __dirname + '/public/';
const srcPath = __dirname + '/src/';

const common_config = require('./webpack/configs/common-webpack.config')(srcPath, publicPath);
const index_config = require('./webpack/configs/index-webpack.config')(srcPath, publicPath);

module.exports = [
    merge(common_config, index_config),
]