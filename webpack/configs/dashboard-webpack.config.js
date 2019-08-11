const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (srcPath, publicPath) => {
    return {
        entry: {
            dashboard: srcPath + 'pages/dashboard/js/dashboard-app.js',
        },
        output: {
            path: publicPath + 'dashboard/',
            filename: 'js/[name].bundle.js'
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: srcPath + 'pages/dashboard/index.html',
                chunks: ['dashboard']
            })
        ]
    }
}