const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
    entry: __dirname + '/src/js/index.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['public']
            }
        new CleanWebpackPlugin()
    ]
}