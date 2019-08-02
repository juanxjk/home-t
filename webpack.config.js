const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
    entry: {
        'index-page': __dirname + '/src/js/index.js'
    },
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.(scss)$/i,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(css)$/i,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // only enable hot in development
                            hmr: process.env.NODE_ENV === 'development',
                            // if hmr does not work, this is a forceful method.
                            reloadAll: true,
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                        }
                    },
                ],
            },
            // Image Loader
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: 'img/[name]-[hash].[ext]',
                },
            },
            // Font Loader
            {
                test: /\.(eot|ttf|woff2?)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts/',
                        name: '[name].[ext]'
                    }
                }]
            },
            // HTML Loader
            {
                test: /\.html$/i,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        removeComments: false,
                        collapseWhitespace: false,
                        interpolate: true
                    }
                }],
            },
        ]
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