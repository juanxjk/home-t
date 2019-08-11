const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (srcPath, publicPath) => {
    return {
        entry: {
            dashboard: srcPath + 'app/dashboard/index.js',
        },
        output: {
            path: publicPath + 'dashboard/',
            filename: 'js/[name].bundle.js'
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: srcPath + 'app/dashboard/index.html',
                chunks: ['dashboard']
            })
        ]
    }
}