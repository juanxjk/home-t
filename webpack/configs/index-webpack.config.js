const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (srcPath, publicPath) => {
    return {
        entry: {
            index: srcPath + 'js/index.js',
        },
        output: {
            path: publicPath,
            filename: 'js/bundle.js'
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: srcPath + 'index.html',
                chunks: ['index']
            })
        ]
    }
}